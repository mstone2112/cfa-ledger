# CFA Level I Study Ledger — setup guide

This app is a set of plain files (HTML/CSS/JS) — no build step, no Node, nothing to compile. You're setting up two free services and editing one file. Follow this in order.

---

## 1. Create the Supabase project (free, no credit card)

1. Go to **supabase.com** and sign up (or sign in).
2. Click **New project**. Give it any name (e.g. "cfa-ledger"), pick any region, set a database password (save it somewhere — you won't need it for this app, but Supabase requires one).
3. Wait ~2 minutes for the project to finish provisioning.

## 2. Create the database table

1. In your new project's left sidebar, click **SQL Editor**.
2. Click **New query**, paste the block below, and click **Run**.

```sql
create table progress (
  user_id uuid references auth.users(id) primary key,
  completed_sections jsonb default '[]'::jsonb,
  quiz_stats jsonb default '{}'::jsonb,
  updated_at timestamptz default now()
);

alter table progress enable row level security;

create policy "Users can view own progress"
on progress for select
using (auth.uid() = user_id);

create policy "Users can insert own progress"
on progress for insert
with check (auth.uid() = user_id);

create policy "Users can update own progress"
on progress for update
using (auth.uid() = user_id);
```

This creates one row per student, and the security policies make sure a student can only ever see or edit her own row — never anyone else's.

3. (Optional, for smoother testing) In the left sidebar go to **Authentication → Providers → Email**, and turn **off** "Confirm email". This means a new account works immediately after signup, with no confirmation email step. Leave it on if you'd rather have that extra verification step.

## 3. Connect the app to Supabase

1. In the left sidebar, click **Project Settings → API**.
2. You'll see two values you need: **Project URL** and the **anon / public** key (a long string starting with `eyJ...`).
3. Open the file **`supabase-config.js`** (it's in the same folder as this README) and replace the two placeholder lines with your real values:

```js
window.SUPABASE_URL = "https://your-project-id.supabase.co";
window.SUPABASE_ANON_KEY = "eyJhbGciOi...(your long key)...";
```

Save the file. That's the only file that needs editing.

## 4. Put the files on GitHub Pages

1. Go to **github.com**, sign in (or create a free account), and create a **new repository** — any name, e.g. `cfa-ledger`. Keep it public (GitHub Pages on free accounts requires a public repo).
2. Upload every file from this folder into that repository. Easiest way: on the repo's main page, click **Add file → Upload files**, then drag in all of these:
   - `index.html`
   - `style.css`
   - `app.js`
   - `supabase-config.js` (with your real values already pasted in)
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `README.md` (optional, just for your own reference)

   Commit the upload.
3. In the repository, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, pick branch **main** and folder **/ (root)**, then **Save**.
5. Wait 1–2 minutes. GitHub will show you a URL like `https://yourusername.github.io/cfa-ledger/`. That's the app's live address.

## 5. Install it on each device

**iPhone or iPad:**
1. Open the GitHub Pages URL in **Safari** (must be Safari, not Chrome).
2. Tap the **Share** icon → **Add to Home Screen** → **Add**.
3. It now opens from its own icon, full-screen, no browser bar.

**Mac:**
1. Open the URL in **Safari**.
2. From the menu bar: **File → Add to Dock** (macOS Sonoma/Sequoia and later). It installs as a standalone app in the Dock.
   - If that option isn't available in your macOS version, open the URL in **Chrome** instead and use the **install icon** in the address bar (looks like a small monitor with a down arrow).

**Signing in:** the first time on each device, she'll sign up with an email and password (or sign in if she already made an account on another device). Progress is stored in Supabase under her account, so it will already be there when she opens the app on the second device.

---

## Optional: wrapping this as a native app with Xcode

If you'd rather have this as a proper `.app` / `.ipa` you build and install through Xcode (e.g. for TestFlight, or just to have a native app bundle instead of a home-screen web app), the standard approach is:

1. Create a new Xcode project → **App** template → interface **SwiftUI**.
2. Add a single `WKWebView` that loads your GitHub Pages URL (or bundles these files locally inside the app and loads them from disk — either works, since there's no server-side code here).
3. Build and run on a simulator or your own device via your Apple ID (no paid developer account needed for local device testing; you'd only need one to distribute via TestFlight or the App Store).

This is a separate step from everything above — the app works fully as a home-screen web app without it. I can write the actual Swift/WKWebView code if and when you want to go that route; just say so.

---

## What's in this version

Two chapters are fully built out: **Calculator Fundamentals** and **Time Value of Money**, each with reading sections, formulas, timeline exhibits, a formula decision guide (TVM), and a quiz that routes wrong answers back to the exact section that taught the concept. The code is structured so additional chapters can be added the same way later — nothing here is hardcoded to "exactly two chapters."
