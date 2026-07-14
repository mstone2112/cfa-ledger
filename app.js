   /* ============================================================
   EXHIBIT SVGS (static timeline diagrams)
   ============================================================ */
const EXHIBIT_DEFS = `
<defs>
  <marker id="arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#B67A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
  <marker id="arrow-slate" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#3B6B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
  <marker id="arrow-teal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#3F7A5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
  <marker id="arrow-brick" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#A6432C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
</defs>`;

const EXHIBIT_COMPOUNDING = `
<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Compounding versus discounting on a timeline</title>
<desc>A timeline with today at t=0 and a future date at t=n. A curved arrow moving forward is labeled compounding, value grows. A curved arrow moving backward is labeled discounting, value shrinks.</desc>
${EXHIBIT_DEFS}
<line x1="100" y1="200" x2="600" y2="200" stroke="#CFC7AE" stroke-width="1"/>
<circle cx="160" cy="200" r="4" fill="#232C42"/>
<circle cx="540" cy="200" r="4" fill="#232C42"/>
<text x="160" y="222" text-anchor="middle" font-size="12" fill="#4B5468">Today (t = 0)</text>
<text x="540" y="222" text-anchor="middle" font-size="12" fill="#4B5468">t = n</text>
<path d="M160 192 Q350 120 540 192" fill="none" stroke="#B67A22" stroke-width="2" marker-end="url(#arrow-amber)"/>
<text x="350" y="105" text-anchor="middle" font-size="12" fill="#B67A22">Compounding &#8212; value grows</text>
<path d="M540 208 Q350 280 160 208" fill="none" stroke="#3B6B8C" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow-slate)"/>
<text x="350" y="298" text-anchor="middle" font-size="12" fill="#3B6B8C">Discounting &#8212; value shrinks</text>
</svg>`;

const EXHIBIT_SINGLE_SUM = `
<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Single sum timeline</title>
<desc>A timeline showing a single cash outflow at time 0 and a single cash inflow at time n, with several periods passing silently in between.</desc>
${EXHIBIT_DEFS}
<line x1="100" y1="200" x2="600" y2="200" stroke="#CFC7AE" stroke-width="1"/>
<line x1="150" y1="196" x2="150" y2="204" stroke="#232C42" stroke-width="1"/>
<line x1="550" y1="196" x2="550" y2="204" stroke="#232C42" stroke-width="1"/>
<text x="150" y="222" text-anchor="middle" font-size="12" fill="#4B5468">t = 0</text>
<text x="350" y="222" text-anchor="middle" font-size="12" fill="#4B5468">n periods pass, no cash flow</text>
<text x="550" y="222" text-anchor="middle" font-size="12" fill="#4B5468">t = n</text>
<text x="350" y="195" text-anchor="middle" font-size="12" fill="#4B5468">&#183; &#183; &#183;</text>
<line x1="150" y1="196" x2="150" y2="260" stroke="#A6432C" stroke-width="2" marker-end="url(#arrow-brick)"/>
<text x="150" y="278" text-anchor="middle" font-size="12" fill="#A6432C">&#8722;PV (invested today)</text>
<line x1="550" y1="204" x2="550" y2="140" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="550" y="125" text-anchor="middle" font-size="12" fill="#3F7A5C">+FV (received later)</text>
</svg>`;

const EXHIBIT_ANNUITY = `
<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Ordinary annuity versus annuity due timelines</title>
<desc>Two stacked timelines. The top shows an ordinary annuity with equal payments at the end of periods 1 through 4. The bottom shows an annuity due with equal payments at the start of periods 0 through 3, one period earlier.</desc>
${EXHIBIT_DEFS}
<text x="340" y="60" text-anchor="middle" font-size="14" font-weight="500" fill="#232C42">Ordinary annuity &#8212; payments at period end</text>
<line x1="100" y1="105" x2="600" y2="105" stroke="#CFC7AE" stroke-width="1"/>
<line x1="140" y1="101" x2="140" y2="109" stroke="#232C42" stroke-width="1"/>
<line x1="255" y1="101" x2="255" y2="109" stroke="#232C42" stroke-width="1"/>
<line x1="370" y1="101" x2="370" y2="109" stroke="#232C42" stroke-width="1"/>
<line x1="485" y1="101" x2="485" y2="109" stroke="#232C42" stroke-width="1"/>
<line x1="600" y1="101" x2="600" y2="109" stroke="#232C42" stroke-width="1"/>
<line x1="255" y1="101" x2="255" y2="65" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="370" y1="101" x2="370" y2="65" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="485" y1="101" x2="485" y2="65" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="600" y1="101" x2="600" y2="65" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="140" y="125" text-anchor="middle" font-size="12" fill="#4B5468">t=0</text>
<text x="255" y="125" text-anchor="middle" font-size="12" fill="#4B5468">t=1</text>
<text x="370" y="125" text-anchor="middle" font-size="12" fill="#4B5468">t=2</text>
<text x="485" y="125" text-anchor="middle" font-size="12" fill="#4B5468">t=3</text>
<text x="600" y="125" text-anchor="middle" font-size="12" fill="#4B5468">t=4</text>
<text x="340" y="160" text-anchor="middle" font-size="14" font-weight="500" fill="#232C42">Annuity due &#8212; payments at period start</text>
<line x1="100" y1="205" x2="600" y2="205" stroke="#CFC7AE" stroke-width="1"/>
<line x1="140" y1="201" x2="140" y2="209" stroke="#232C42" stroke-width="1"/>
<line x1="255" y1="201" x2="255" y2="209" stroke="#232C42" stroke-width="1"/>
<line x1="370" y1="201" x2="370" y2="209" stroke="#232C42" stroke-width="1"/>
<line x1="485" y1="201" x2="485" y2="209" stroke="#232C42" stroke-width="1"/>
<line x1="600" y1="201" x2="600" y2="209" stroke="#232C42" stroke-width="1"/>
<line x1="140" y1="201" x2="140" y2="165" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="255" y1="201" x2="255" y2="165" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="370" y1="201" x2="370" y2="165" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="485" y1="201" x2="485" y2="165" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="140" y="225" text-anchor="middle" font-size="12" fill="#4B5468">t=0</text>
<text x="255" y="225" text-anchor="middle" font-size="12" fill="#4B5468">t=1</text>
<text x="370" y="225" text-anchor="middle" font-size="12" fill="#4B5468">t=2</text>
<text x="485" y="225" text-anchor="middle" font-size="12" fill="#4B5468">t=3</text>
<text x="600" y="225" text-anchor="middle" font-size="12" fill="#4B5468">t=4</text>
<text x="340" y="260" text-anchor="middle" font-size="12" fill="#4B5468">Each arrow = one equal payment (PMT)</text>
</svg>`;

const EXHIBIT_PERPETUITY = `
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Perpetuity timeline</title>
<desc>A timeline valued at time 0, with equal level payments at periods 1 through 4, followed by fading arrows and trailing dots indicating the payments continue forever.</desc>
${EXHIBIT_DEFS}
<line x1="90" y1="160" x2="615" y2="160" stroke="#CFC7AE" stroke-width="1"/>
<circle cx="140" cy="160" r="4" fill="#232C42"/>
<text x="140" y="182" text-anchor="middle" font-size="12" fill="#4B5468">t = 0 (value here)</text>
<line x1="230" y1="156" x2="230" y2="115" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="310" y1="156" x2="310" y2="115" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="390" y1="156" x2="390" y2="115" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="470" y1="156" x2="470" y2="115" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="230" y="182" text-anchor="middle" font-size="12" fill="#4B5468">t=1</text>
<text x="310" y="182" text-anchor="middle" font-size="12" fill="#4B5468">t=2</text>
<text x="390" y="182" text-anchor="middle" font-size="12" fill="#4B5468">t=3</text>
<text x="470" y="182" text-anchor="middle" font-size="12" fill="#4B5468">t=4</text>
<text x="500" y="138" text-anchor="middle" font-size="12" fill="#4B5468">&#183; &#183; &#183;</text>
<line x1="550" y1="156" x2="550" y2="115" stroke="#3F7A5C" stroke-width="2" opacity="0.5"/>
<line x1="590" y1="156" x2="590" y2="115" stroke="#3F7A5C" stroke-width="2" opacity="0.25"/>
<text x="580" y="182" text-anchor="middle" font-size="12" fill="#4B5468">forever &#8594;</text>
<text x="350" y="220" text-anchor="middle" font-size="12" fill="#4B5468">Level payment (PMT), repeating indefinitely</text>
</svg>`;

const EXHIBIT_UNEVEN = `
<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Uneven cash flow timeline</title>
<desc>A timeline showing a cash outflow at time 0 and four different cash inflow amounts at times 1 through 4.</desc>
${EXHIBIT_DEFS}
<line x1="100" y1="200" x2="620" y2="200" stroke="#CFC7AE" stroke-width="1"/>
<line x1="140" y1="196" x2="140" y2="204" stroke="#232C42" stroke-width="1"/>
<line x1="255" y1="196" x2="255" y2="204" stroke="#232C42" stroke-width="1"/>
<line x1="370" y1="196" x2="370" y2="204" stroke="#232C42" stroke-width="1"/>
<line x1="485" y1="196" x2="485" y2="204" stroke="#232C42" stroke-width="1"/>
<line x1="600" y1="196" x2="600" y2="204" stroke="#232C42" stroke-width="1"/>
<text x="140" y="222" text-anchor="middle" font-size="12" fill="#4B5468">t = 0</text>
<text x="255" y="222" text-anchor="middle" font-size="12" fill="#4B5468">t = 1</text>
<text x="370" y="222" text-anchor="middle" font-size="12" fill="#4B5468">t = 2</text>
<text x="485" y="222" text-anchor="middle" font-size="12" fill="#4B5468">t = 3</text>
<text x="600" y="222" text-anchor="middle" font-size="12" fill="#4B5468">t = 4</text>
<line x1="140" y1="196" x2="140" y2="265" stroke="#A6432C" stroke-width="2" marker-end="url(#arrow-brick)"/>
<text x="140" y="282" text-anchor="middle" font-size="12" fill="#A6432C">&#8722;$10,000</text>
<line x1="255" y1="204" x2="255" y2="125" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="255" y="112" text-anchor="middle" font-size="12" fill="#3F7A5C">+$3,000</text>
<line x1="370" y1="204" x2="370" y2="125" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="370" y="112" text-anchor="middle" font-size="12" fill="#3F7A5C">+$4,000</text>
<line x1="485" y1="204" x2="485" y2="125" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="485" y="112" text-anchor="middle" font-size="12" fill="#3F7A5C">+$2,500</text>
<line x1="600" y1="204" x2="600" y2="125" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="600" y="112" text-anchor="middle" font-size="12" fill="#3F7A5C">+$5,000</text>
<line x1="120" y1="306" x2="150" y2="306" stroke="#3F7A5C" stroke-width="2"/>
<text x="158" y="310" font-size="12" fill="#3F7A5C">Cash inflow (received)</text>
<line x1="380" y1="306" x2="410" y2="306" stroke="#A6432C" stroke-width="2"/>
<text x="418" y="310" font-size="12" fill="#A6432C">Cash outflow (paid)</text>
</svg>`;

const EXHIBIT_WORKED_FV = `
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked single sum future value timeline</title>
<desc>Timeline showing $5,000 invested today at time 0 growing to $8,954 at time 10, at 6 percent annual interest.</desc>
${EXHIBIT_DEFS}
<line x1="100" y1="150" x2="600" y2="150" stroke="#CFC7AE" stroke-width="1"/>
<line x1="150" y1="146" x2="150" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="550" y1="146" x2="550" y2="154" stroke="#232C42" stroke-width="1"/>
<text x="150" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t = 0</text>
<text x="350" y="172" text-anchor="middle" font-size="12" fill="#4B5468">10 years @ 6%</text>
<text x="550" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t = 10</text>
<text x="350" y="145" text-anchor="middle" font-size="12" fill="#4B5468">&#183; &#183; &#183;</text>
<line x1="150" y1="146" x2="150" y2="205" stroke="#A6432C" stroke-width="2" marker-end="url(#arrow-brick)"/>
<text x="150" y="222" text-anchor="middle" font-size="12" fill="#A6432C">&#8722;$5,000</text>
<line x1="550" y1="154" x2="550" y2="95" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="550" y="80" text-anchor="middle" font-size="13" font-weight="600" fill="#3F7A5C">+$8,954</text>
</svg>`;

const EXHIBIT_WORKED_PV = `
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked single sum present value timeline</title>
<desc>Timeline showing a future amount of $10,000 at time 5 valued back to approximately $7,130 at time 0, at 7 percent.</desc>
${EXHIBIT_DEFS}
<line x1="100" y1="150" x2="600" y2="150" stroke="#CFC7AE" stroke-width="1"/>
<circle cx="150" cy="150" r="4" fill="#232C42"/>
<line x1="550" y1="146" x2="550" y2="154" stroke="#232C42" stroke-width="1"/>
<text x="150" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t = 0 &#8212; value here</text>
<text x="150" y="192" text-anchor="middle" font-size="13" font-weight="600" fill="#B67A22">PV &#8776; $7,130</text>
<text x="350" y="172" text-anchor="middle" font-size="12" fill="#4B5468">@ 7% discount rate</text>
<text x="350" y="145" text-anchor="middle" font-size="12" fill="#4B5468">&#183; &#183; &#183;</text>
<text x="550" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t = 5</text>
<line x1="550" y1="154" x2="550" y2="95" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="550" y="80" text-anchor="middle" font-size="13" font-weight="600" fill="#3F7A5C">+$10,000</text>
</svg>`;

const EXHIBIT_WORKED_EAR = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked effective annual rate timeline</title>
<desc>Timeline over one year with four quarterly compounding steps, showing one dollar growing to 1.0824 dollars by year end.</desc>
${EXHIBIT_DEFS}
<line x1="100" y1="150" x2="620" y2="150" stroke="#CFC7AE" stroke-width="1"/>
<line x1="150" y1="146" x2="150" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="262" y1="146" x2="262" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="374" y1="146" x2="374" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="486" y1="146" x2="486" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="598" y1="146" x2="598" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="262" y1="146" x2="262" y2="120" stroke="#B67A22" stroke-width="2" marker-end="url(#arrow-amber)"/>
<line x1="374" y1="146" x2="374" y2="120" stroke="#B67A22" stroke-width="2" marker-end="url(#arrow-amber)"/>
<line x1="486" y1="146" x2="486" y2="120" stroke="#B67A22" stroke-width="2" marker-end="url(#arrow-amber)"/>
<line x1="598" y1="146" x2="598" y2="120" stroke="#B67A22" stroke-width="2" marker-end="url(#arrow-amber)"/>
<text x="150" y="172" text-anchor="middle" font-size="12" fill="#4B5468">Start</text>
<text x="150" y="192" text-anchor="middle" font-size="12" fill="#4B5468">$1.00</text>
<text x="598" y="172" text-anchor="middle" font-size="12" fill="#4B5468">1 year</text>
<text x="598" y="192" text-anchor="middle" font-size="13" font-weight="600" fill="#B67A22">$1.0824 (EAR)</text>
<text x="374" y="205" text-anchor="middle" font-size="12" fill="#4B5468">4 compounding periods (quarterly)</text>
</svg>`;

const EXHIBIT_WORKED_ANNUITY_FV = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked ordinary annuity future value timeline</title>
<desc>Timeline showing eight equal end-of-year payments of $2,000, compressed in the middle, accumulating to a future value of approximately $19,098.</desc>
${EXHIBIT_DEFS}
<line x1="100" y1="150" x2="620" y2="150" stroke="#CFC7AE" stroke-width="1"/>
<line x1="180" y1="146" x2="180" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="260" y1="146" x2="260" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="340" y1="146" x2="340" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="560" y1="146" x2="560" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="180" y1="146" x2="180" y2="100" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="260" y1="146" x2="260" y2="100" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="340" y1="146" x2="340" y2="100" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="560" y1="146" x2="560" y2="100" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="180" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=1</text>
<text x="260" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=2</text>
<text x="340" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=3</text>
<text x="430" y="145" text-anchor="middle" font-size="12" fill="#4B5468">&#183; &#183; &#183;</text>
<text x="560" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=8</text>
<text x="560" y="85" text-anchor="middle" font-size="13" font-weight="600" fill="#B67A22">FV &#8776; $19,098</text>
<text x="350" y="205" text-anchor="middle" font-size="12" fill="#4B5468">$2,000 at the end of each year, 5% annually</text>
</svg>`;

const EXHIBIT_WORKED_ANNUITY_PV = `
<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked ordinary annuity versus annuity due present value timelines</title>
<desc>Two stacked timelines comparing a six-period ordinary annuity worth about $7,863 today against the same payments as an annuity due, worth about $8,177 today.</desc>
${EXHIBIT_DEFS}
<text x="340" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="#232C42">Ordinary: PV &#8776; $7,863</text>
<line x1="100" y1="90" x2="620" y2="90" stroke="#CFC7AE" stroke-width="1"/>
<line x1="150" y1="86" x2="150" y2="94" stroke="#232C42" stroke-width="1"/>
<line x1="240" y1="86" x2="240" y2="94" stroke="#232C42" stroke-width="1"/>
<line x1="330" y1="86" x2="330" y2="94" stroke="#232C42" stroke-width="1"/>
<line x1="420" y1="86" x2="420" y2="94" stroke="#232C42" stroke-width="1"/>
<line x1="510" y1="86" x2="510" y2="94" stroke="#232C42" stroke-width="1"/>
<line x1="600" y1="86" x2="600" y2="94" stroke="#232C42" stroke-width="1"/>
<line x1="150" y1="86" x2="150" y2="55" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="240" y1="86" x2="240" y2="55" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="330" y1="86" x2="330" y2="55" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="420" y1="86" x2="420" y2="55" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="510" y1="86" x2="510" y2="55" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="600" y1="86" x2="600" y2="55" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="150" y="110" text-anchor="middle" font-size="11" fill="#4B5468">t=1</text>
<text x="240" y="110" text-anchor="middle" font-size="11" fill="#4B5468">t=2</text>
<text x="330" y="110" text-anchor="middle" font-size="11" fill="#4B5468">t=3</text>
<text x="420" y="110" text-anchor="middle" font-size="11" fill="#4B5468">t=4</text>
<text x="510" y="110" text-anchor="middle" font-size="11" fill="#4B5468">t=5</text>
<text x="600" y="110" text-anchor="middle" font-size="11" fill="#4B5468">t=6</text>

<text x="340" y="150" text-anchor="middle" font-size="13" font-weight="600" fill="#232C42">Annuity due: PV &#8776; $8,177</text>
<line x1="100" y1="190" x2="620" y2="190" stroke="#CFC7AE" stroke-width="1"/>
<line x1="150" y1="186" x2="150" y2="194" stroke="#232C42" stroke-width="1"/>
<line x1="240" y1="186" x2="240" y2="194" stroke="#232C42" stroke-width="1"/>
<line x1="330" y1="186" x2="330" y2="194" stroke="#232C42" stroke-width="1"/>
<line x1="420" y1="186" x2="420" y2="194" stroke="#232C42" stroke-width="1"/>
<line x1="510" y1="186" x2="510" y2="194" stroke="#232C42" stroke-width="1"/>
<line x1="600" y1="186" x2="600" y2="194" stroke="#232C42" stroke-width="1"/>
<line x1="150" y1="186" x2="150" y2="155" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="240" y1="186" x2="240" y2="155" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="330" y1="186" x2="330" y2="155" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="420" y1="186" x2="420" y2="155" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="510" y1="186" x2="510" y2="155" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="150" y="210" text-anchor="middle" font-size="11" fill="#4B5468">t=0</text>
<text x="240" y="210" text-anchor="middle" font-size="11" fill="#4B5468">t=1</text>
<text x="330" y="210" text-anchor="middle" font-size="11" fill="#4B5468">t=2</text>
<text x="420" y="210" text-anchor="middle" font-size="11" fill="#4B5468">t=3</text>
<text x="510" y="210" text-anchor="middle" font-size="11" fill="#4B5468">t=4</text>
<text x="600" y="210" text-anchor="middle" font-size="11" fill="#4B5468">t=5</text>
<text x="340" y="245" text-anchor="middle" font-size="12" fill="#4B5468">Same $1,500/year, 4% &#8212; due version pays one period earlier</text>
</svg>`;

const EXHIBIT_WORKED_PERPETUITY_LEVEL = `
<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked level perpetuity timeline</title>
<desc>A row of equal payment arrows fading into the distance, captioned six dollars per year forever at nine percent equals a present value of about $66.67.</desc>
${EXHIBIT_DEFS}
<text x="340" y="45" text-anchor="middle" font-size="13" font-weight="600" fill="#232C42">Level: $6/year forever, 9% rate &#8594; PV &#8776; $66.67</text>
<line x1="90" y1="100" x2="520" y2="100" stroke="#CFC7AE" stroke-width="1"/>
<line x1="200" y1="96" x2="200" y2="60" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="270" y1="96" x2="270" y2="60" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="340" y1="96" x2="340" y2="60" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="410" y1="96" x2="410" y2="60" stroke="#3F7A5C" stroke-width="2" opacity="0.5"/>
<line x1="460" y1="96" x2="460" y2="60" stroke="#3F7A5C" stroke-width="2" opacity="0.25"/>
<text x="500" y="120" text-anchor="middle" font-size="11" fill="#4B5468">forever &#8594;</text>
</svg>`;

const EXHIBIT_WORKED_PERPETUITY_GROWING = `
<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked growing perpetuity timeline</title>
<desc>A row of payment arrows fading into the distance, captioned six dollars growing three percent per year forever at nine percent equals a present value of $100.</desc>
${EXHIBIT_DEFS}
<text x="340" y="45" text-anchor="middle" font-size="13" font-weight="600" fill="#232C42">Growing 3%/year forever, 9% rate &#8594; PV = $100</text>
<line x1="90" y1="100" x2="520" y2="100" stroke="#CFC7AE" stroke-width="1"/>
<line x1="200" y1="96" x2="200" y2="60" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="270" y1="96" x2="270" y2="53" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="340" y1="96" x2="340" y2="46" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="410" y1="96" x2="410" y2="40" stroke="#3F7A5C" stroke-width="2" opacity="0.5"/>
<line x1="460" y1="96" x2="460" y2="34" stroke="#3F7A5C" stroke-width="2" opacity="0.25"/>
<text x="500" y="120" text-anchor="middle" font-size="11" fill="#4B5468">forever, growing &#8594;</text>
</svg>`;

const EXHIBIT_WORKED_UNEVEN = `
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked uneven cash flow timeline</title>
<desc>Timeline showing three different cash inflows of $2,000, $3,500, and $1,000 in years one through three, discounted back to a present value of about $5,842 at time 0.</desc>
${EXHIBIT_DEFS}
<line x1="100" y1="150" x2="600" y2="150" stroke="#CFC7AE" stroke-width="1"/>
<circle cx="140" cy="150" r="4" fill="#232C42"/>
<line x1="280" y1="146" x2="280" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="420" y1="146" x2="420" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="560" y1="146" x2="560" y2="154" stroke="#232C42" stroke-width="1"/>
<text x="140" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t = 0</text>
<text x="140" y="192" text-anchor="middle" font-size="13" font-weight="600" fill="#B67A22">PV &#8776; $5,842</text>
<line x1="280" y1="146" x2="280" y2="100" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="280" y="110" text-anchor="middle" font-size="12" fill="#3F7A5C">+$2,000</text>
<text x="280" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t = 1</text>
<line x1="420" y1="146" x2="420" y2="100" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="420" y="110" text-anchor="middle" font-size="12" fill="#3F7A5C">+$3,500</text>
<text x="420" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t = 2</text>
<line x1="560" y1="146" x2="560" y2="100" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="560" y="110" text-anchor="middle" font-size="12" fill="#3F7A5C">+$1,000</text>
<text x="560" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t = 3</text>
<text x="350" y="215" text-anchor="middle" font-size="12" fill="#4B5468">Each cash flow discounted at 6% and summed</text>
</svg>`;
const EXHIBIT_WORKED_NPV = `
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked NPV timeline</title>
<desc>Timeline showing a $50,000 outflow today and five $15,000 inflows in years 1 through 5, netting to an NPV of about $6,862 at 10 percent.</desc>
${EXHIBIT_DEFS}
<line x1="100" y1="150" x2="620" y2="150" stroke="#CFC7AE" stroke-width="1"/>
<line x1="140" y1="146" x2="140" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="230" y1="146" x2="230" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="320" y1="146" x2="320" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="560" y1="146" x2="560" y2="154" stroke="#232C42" stroke-width="1"/>
<line x1="140" y1="146" x2="140" y2="205" stroke="#A6432C" stroke-width="2" marker-end="url(#arrow-brick)"/>
<text x="140" y="222" text-anchor="middle" font-size="12" fill="#A6432C">&#8722;$50,000</text>
<line x1="230" y1="146" x2="230" y2="100" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="320" y1="146" x2="320" y2="100" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<line x1="560" y1="146" x2="560" y2="100" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="140" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=0</text>
<text x="230" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=1</text>
<text x="320" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=2</text>
<text x="430" y="145" text-anchor="middle" font-size="12" fill="#4B5468">&#183; &#183; &#183;</text>
<text x="560" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=5</text>
<text x="560" y="85" text-anchor="middle" font-size="13" font-weight="600" fill="#B67A22">NPV &#8776; $6,862</text>
<text x="350" y="205" text-anchor="middle" font-size="12" fill="#4B5468">$15,000/year for 5 years at 10%, minus the $50,000 cost</text>
</svg>`;

const EXHIBIT_WORKED_DDM = `
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked dividend discount model timeline</title>
<desc>Timeline showing a growing dividend of $2.08 starting in year 1 and continuing forever, valued today at approximately $34.67.</desc>
${EXHIBIT_DEFS}
<line x1="90" y1="150" x2="600" y2="150" stroke="#CFC7AE" stroke-width="1"/>
<circle cx="140" cy="150" r="4" fill="#232C42"/>
<text x="140" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=0 &#8212; value here</text>
<text x="140" y="192" text-anchor="middle" font-size="13" font-weight="600" fill="#B67A22">V0 &#8776; $34.67</text>
<line x1="230" y1="146" x2="230" y2="105" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="230" y="95" text-anchor="middle" font-size="11" fill="#3F7A5C">$2.08</text>
<text x="230" y="172" text-anchor="middle" font-size="11" fill="#4B5468">t=1</text>
<line x1="310" y1="146" x2="310" y2="98" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="310" y="88" text-anchor="middle" font-size="11" fill="#3F7A5C">$2.16</text>
<text x="310" y="172" text-anchor="middle" font-size="11" fill="#4B5468">t=2</text>
<line x1="390" y1="146" x2="390" y2="91" stroke="#3F7A5C" stroke-width="2" opacity="0.6"/>
<line x1="450" y1="146" x2="450" y2="85" stroke="#3F7A5C" stroke-width="2" opacity="0.3"/>
<text x="500" y="172" text-anchor="middle" font-size="12" fill="#4B5468">forever, +4%/yr &#8594;</text>
<text x="350" y="215" text-anchor="middle" font-size="12" fill="#4B5468">Growing perpetuity of dividends, discounted at 10%</text>
</svg>`;

const EXHIBIT_WORKED_BOND = `
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Worked bond pricing timeline</title>
<desc>Timeline showing three annual coupon payments of $60 and a final face value repayment of $1,000 in year 3, priced today at approximately $948.46.</desc>
${EXHIBIT_DEFS}
<line x1="90" y1="150" x2="600" y2="150" stroke="#CFC7AE" stroke-width="1"/>
<circle cx="140" cy="150" r="4" fill="#232C42"/>
<text x="140" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=0</text>
<text x="140" y="192" text-anchor="middle" font-size="13" font-weight="600" fill="#B67A22">Price &#8776; $948.46</text>
<line x1="280" y1="146" x2="280" y2="105" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="280" y="95" text-anchor="middle" font-size="12" fill="#3F7A5C">+$60</text>
<text x="280" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=1</text>
<line x1="420" y1="146" x2="420" y2="105" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="420" y="95" text-anchor="middle" font-size="12" fill="#3F7A5C">+$60</text>
<text x="420" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=2</text>
<line x1="560" y1="146" x2="560" y2="90" stroke="#3F7A5C" stroke-width="2" marker-end="url(#arrow-teal)"/>
<text x="560" y="80" text-anchor="middle" font-size="12" fill="#3F7A5C">+$60 &amp; +$1,000</text>
<text x="560" y="172" text-anchor="middle" font-size="12" fill="#4B5468">t=3</text>
<text x="350" y="220" text-anchor="middle" font-size="12" fill="#4B5468">6% coupon on $1,000 face, discounted at an 8% market yield</text>
</svg>`;

const EXHIBIT_WORKED_DIVERSIFICATION = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Diversification and correlation illustration</title>
<desc>Two wavy lines representing two assets. When highly correlated, the lines move together and the combined risk stays high. When less correlated, the lines partly offset, smoothing the combined result.</desc>
<text x="170" y="40" text-anchor="middle" font-size="13" font-weight="600" fill="#232C42">Correlation near +1</text>
<path d="M60 90 Q90 60 120 90 T180 90 T240 90 T280 90" fill="none" stroke="#3F7A5C" stroke-width="2"/>
<path d="M60 95 Q90 65 120 95 T180 95 T240 95 T280 95" fill="none" stroke="#B67A22" stroke-width="2" stroke-dasharray="4 3"/>
<text x="170" y="120" text-anchor="middle" font-size="11" fill="#4B5468">Both assets move together &#8212; little diversification benefit</text>

<text x="510" y="40" text-anchor="middle" font-size="13" font-weight="600" fill="#232C42">Correlation near 0 (or negative)</text>
<path d="M400 90 Q430 60 460 90 T520 90 T580 90 T620 90" fill="none" stroke="#3F7A5C" stroke-width="2"/>
<path d="M400 95 Q430 125 460 95 T520 95 T580 95 T620 95" fill="none" stroke="#B67A22" stroke-width="2" stroke-dasharray="4 3"/>
<text x="510" y="120" text-anchor="middle" font-size="11" fill="#4B5468">Ups and downs partly offset &#8212; real diversification benefit</text>

<line x1="60" y1="160" x2="90" y2="160" stroke="#3F7A5C" stroke-width="2"/>
<text x="98" y="164" font-size="11" fill="#3F7A5C">Asset A</text>
<line x1="200" y1="160" x2="230" y2="160" stroke="#B67A22" stroke-width="2" stroke-dasharray="4 3"/>
<text x="238" y="164" font-size="11" fill="#B67A22">Asset B</text>
</svg>`;

const EXHIBIT_BOND_PRICE_MAP = `
<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Bond price relative to face value</title>
<desc>A horizontal scale showing three bond price outcomes relative to a $1,000 face value: a discount bond priced below face value when its coupon rate is below the market yield, a par bond priced at face value when the coupon rate equals the yield, and a premium bond priced above face value when the coupon rate exceeds the yield.</desc>
<line x1="80" y1="130" x2="600" y2="130" stroke="#CFC7AE" stroke-width="1"/>
<circle cx="180" cy="130" r="4" fill="#A6432C"/>
<circle cx="340" cy="130" r="4" fill="#232C42"/>
<circle cx="500" cy="130" r="4" fill="#3F7A5C"/>
<text x="180" y="105" text-anchor="middle" font-size="13" font-weight="600" fill="#A6432C">$948</text>
<text x="340" y="105" text-anchor="middle" font-size="13" font-weight="600" fill="#232C42">$1,000</text>
<text x="500" y="105" text-anchor="middle" font-size="13" font-weight="600" fill="#3F7A5C">$1,060</text>
<text x="180" y="155" text-anchor="middle" font-size="12" font-weight="600" fill="#A6432C">Discount</text>
<text x="180" y="172" text-anchor="middle" font-size="11" fill="#4B5468">coupon &lt; yield</text>
<text x="340" y="155" text-anchor="middle" font-size="12" font-weight="600" fill="#232C42">Par</text>
<text x="340" y="172" text-anchor="middle" font-size="11" fill="#4B5468">coupon = yield</text>
<text x="500" y="155" text-anchor="middle" font-size="12" font-weight="600" fill="#3F7A5C">Premium</text>
<text x="500" y="172" text-anchor="middle" font-size="11" fill="#4B5468">coupon &gt; yield</text>
</svg>`;

const EXHIBIT_YIELD_CURVE_SHAPES = `
<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Yield curve shapes</title>
<desc>Three small charts showing yield versus maturity: a normal upward-sloping curve, a flat curve, and an inverted downward-sloping curve.</desc>
<text x="130" y="30" text-anchor="middle" font-size="12" font-weight="600" fill="#232C42">Normal</text>
<line x1="50" y1="130" x2="210" y2="130" stroke="#CFC7AE" stroke-width="1"/>
<polyline points="50,120 130,90 210,60" fill="none" stroke="#3F7A5C" stroke-width="2"/>
<text x="130" y="150" text-anchor="middle" font-size="10" fill="#4B5468">Most common shape</text>

<text x="340" y="30" text-anchor="middle" font-size="12" font-weight="600" fill="#232C42">Flat</text>
<line x1="260" y1="130" x2="420" y2="130" stroke="#CFC7AE" stroke-width="1"/>
<polyline points="260,90 340,90 420,90" fill="none" stroke="#B67A22" stroke-width="2"/>
<text x="340" y="150" text-anchor="middle" font-size="10" fill="#4B5468">Transition / uncertainty</text>

<text x="550" y="30" text-anchor="middle" font-size="12" font-weight="600" fill="#232C42">Inverted</text>
<line x1="470" y1="130" x2="630" y2="130" stroke="#CFC7AE" stroke-width="1"/>
<polyline points="470,60 550,90 630,120" fill="none" stroke="#A6432C" stroke-width="2"/>
<text x="550" y="150" text-anchor="middle" font-size="10" fill="#4B5468">Rare, often watched closely</text>
</svg>`;

const EXHIBIT_INVENTORY_COMPARISON = `
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Inventory method comparison</title>
<desc>Bar chart comparing cost of goods sold and ending inventory value under FIFO, LIFO, and weighted average methods during a period of rising prices.</desc>
<line x1="90" y1="180" x2="620" y2="180" stroke="#CFC7AE" stroke-width="1"/>
<rect x="130" y="67" width="25" height="113" fill="#A6432C"/>
<rect x="160" y="138" width="25" height="42" fill="#3F7A5C"/>
<text x="157" y="58" text-anchor="middle" font-size="11" fill="#A6432C">$1,600</text>
<text x="172" y="130" text-anchor="middle" font-size="11" fill="#3F7A5C">$600</text>
<text x="157" y="200" text-anchor="middle" font-size="12" font-weight="600" fill="#232C42">FIFO</text>
<rect x="320" y="60" width="25" height="120" fill="#A6432C"/>
<rect x="350" y="145" width="25" height="35" fill="#3F7A5C"/>
<text x="347" y="51" text-anchor="middle" font-size="11" fill="#A6432C">$1,700</text>
<text x="362" y="137" text-anchor="middle" font-size="11" fill="#3F7A5C">$500</text>
<text x="347" y="200" text-anchor="middle" font-size="12" font-weight="600" fill="#232C42">LIFO</text>
<rect x="510" y="64" width="25" height="116" fill="#A6432C"/>
<rect x="540" y="141" width="25" height="39" fill="#3F7A5C"/>
<text x="537" y="55" text-anchor="middle" font-size="11" fill="#A6432C">$1,650</text>
<text x="552" y="133" text-anchor="middle" font-size="11" fill="#3F7A5C">$550</text>
<text x="537" y="200" text-anchor="middle" font-size="12" font-weight="600" fill="#232C42">Weighted avg.</text>
<rect x="150" y="222" width="14" height="10" fill="#A6432C"/>
<text x="170" y="231" font-size="11" fill="#4B5468">Cost of goods sold</text>
<rect x="330" y="222" width="14" height="10" fill="#3F7A5C"/>
<text x="350" y="231" font-size="11" fill="#4B5468">Ending inventory value</text>
</svg>`;

const EXHIBIT_DEPRECIATION_COMPARISON = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Straight-line versus accelerated depreciation</title>
<desc>Line chart comparing annual depreciation expense over five years: a flat straight-line amount versus a declining-balance amount that starts high and falls each year.</desc>
<line x1="90" y1="180" x2="450" y2="180" stroke="#CFC7AE" stroke-width="1"/>
<polyline points="100,126 180,126 260,126 340,126 420,126" fill="none" stroke="#3F7A5C" stroke-width="2"/>
<polyline points="100,60 180,108 260,137 340,154 420,164" fill="none" stroke="#B67A22" stroke-width="2"/>
<circle cx="100" cy="60" r="3" fill="#B67A22"/><circle cx="180" cy="108" r="3" fill="#B67A22"/><circle cx="260" cy="137" r="3" fill="#B67A22"/><circle cx="340" cy="154" r="3" fill="#B67A22"/><circle cx="420" cy="164" r="3" fill="#B67A22"/>
<text x="100" y="200" text-anchor="middle" font-size="11" fill="#4B5468">Yr 1</text>
<text x="180" y="200" text-anchor="middle" font-size="11" fill="#4B5468">Yr 2</text>
<text x="260" y="200" text-anchor="middle" font-size="11" fill="#4B5468">Yr 3</text>
<text x="340" y="200" text-anchor="middle" font-size="11" fill="#4B5468">Yr 4</text>
<text x="420" y="200" text-anchor="middle" font-size="11" fill="#4B5468">Yr 5</text>
<rect x="470" y="55" width="14" height="10" fill="#B67A22"/>
<text x="490" y="64" font-size="11" fill="#4B5468">Declining balance (accelerated)</text>
<rect x="470" y="80" width="14" height="10" fill="#3F7A5C"/>
<text x="490" y="89" font-size="11" fill="#4B5468">Straight-line</text>
</svg>`;

const EXHIBIT_COMMONSIZE_COMPARISON = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Common-size income statement comparison</title>
<desc>Two stacked bars, each totaling 100 percent of revenue, comparing the cost of goods sold and gross profit proportions of two differently-sized companies.</desc>
<line x1="90" y1="180" x2="590" y2="180" stroke="#CFC7AE" stroke-width="1"/>
<rect x="220" y="90" width="60" height="90" fill="#A6432C"/>
<rect x="220" y="30" width="60" height="60" fill="#3F7A5C"/>
<text x="250" y="140" text-anchor="middle" font-size="12" fill="#EEEAE0">60%</text>
<text x="250" y="65" text-anchor="middle" font-size="12" fill="#EEEAE0">40%</text>
<text x="250" y="200" text-anchor="middle" font-size="12" font-weight="600" fill="#232C42">Company A ($10M revenue)</text>
<rect x="420" y="82" width="60" height="98" fill="#A6432C"/>
<rect x="420" y="30" width="60" height="52" fill="#3F7A5C"/>
<text x="450" y="136" text-anchor="middle" font-size="12" fill="#EEEAE0">65%</text>
<text x="450" y="60" text-anchor="middle" font-size="12" fill="#EEEAE0">35%</text>
<text x="450" y="200" text-anchor="middle" font-size="12" font-weight="600" fill="#232C42">Company B ($100M revenue)</text>
<rect x="100" y="30" width="14" height="10" fill="#3F7A5C"/>
<text x="120" y="39" font-size="11" fill="#4B5468">Gross profit %</text>
<rect x="100" y="50" width="14" height="10" fill="#A6432C"/>
<text x="120" y="59" font-size="11" fill="#4B5468">COGS %</text>
</svg>`;

const EXHIBIT_SML = `
<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" role="img">
<title>The security market line</title>
<desc>A line graph with beta on the horizontal axis and expected return on the vertical axis. The security market line starts at the risk-free rate when beta is zero and rises through the market return at beta equal to one. A point above the line is undervalued; a point below the line is overvalued.</desc>
<line x1="90" y1="220" x2="600" y2="220" stroke="#232C42" stroke-width="1"/>
<line x1="90" y1="220" x2="90" y2="40" stroke="#232C42" stroke-width="1"/>
<text x="345" y="250" text-anchor="middle" font-size="12" fill="#4B5468">Beta (systematic risk)</text>
<text x="40" y="130" text-anchor="middle" font-size="12" fill="#4B5468" transform="rotate(-90 40 130)">Expected return</text>
<line x1="90" y1="190" x2="560" y2="70" stroke="#B67A22" stroke-width="2"/>
<circle cx="90" cy="190" r="4" fill="#232C42"/>
<text x="90" y="205" text-anchor="middle" font-size="11" fill="#4B5468">Rf</text>
<text x="60" y="194" text-anchor="middle" font-size="11" fill="#4B5468">\u03B2=0</text>
<circle cx="325" cy="130" r="4" fill="#232C42"/>
<text x="325" y="205" text-anchor="middle" font-size="11" fill="#4B5468">\u03B2=1 (market)</text>
<text x="325" y="115" text-anchor="middle" font-size="11" fill="#4B5468">Rm</text>
<circle cx="450" cy="75" r="5" fill="#3F7A5C"/>
<text x="450" y="60" text-anchor="middle" font-size="11" fill="#3F7A5C">Undervalued (above line)</text>
<circle cx="230" cy="185" r="5" fill="#A6432C"/>
<text x="230" y="200" text-anchor="middle" font-size="11" fill="#A6432C" dy="14">Overvalued (below line)</text>
</svg>`;

const EXHIBIT_EFFICIENT_FRONTIER = `
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img">
<title>The efficient frontier and capital market line</title>
<desc>A curved efficient frontier of risky-asset portfolios, with a straight capital market line running from the risk-free rate tangent to the frontier at the optimal market portfolio.</desc>
<line x1="90" y1="210" x2="600" y2="210" stroke="#232C42" stroke-width="1"/>
<line x1="90" y1="210" x2="90" y2="40" stroke="#232C42" stroke-width="1"/>
<text x="345" y="240" text-anchor="middle" font-size="12" fill="#4B5468">Risk (standard deviation)</text>
<text x="40" y="120" text-anchor="middle" font-size="12" fill="#4B5468" transform="rotate(-90 40 120)">Expected return</text>
<path d="M150 200 Q 220 60 420 55 Q 500 55 560 75" fill="none" stroke="#3F7A5C" stroke-width="2"/>
<text x="480" y="45" text-anchor="middle" font-size="11" fill="#3F7A5C">Efficient frontier (risky assets)</text>
<line x1="90" y1="190" x2="450" y2="58" stroke="#B67A22" stroke-width="2"/>
<circle cx="90" cy="190" r="4" fill="#232C42"/>
<text x="90" y="205" text-anchor="middle" font-size="11" fill="#4B5468">Rf</text>
<circle cx="330" cy="58" r="5" fill="#B67A22"/>
<text x="330" y="42" text-anchor="middle" font-size="11" fill="#B67A22">Market portfolio (tangency point)</text>
<text x="500" y="90" text-anchor="middle" font-size="11" fill="#B67A22">Capital market line (CML)</text>
</svg>`;

const EXHIBIT_TVM_MINDMAP_SVG = `
<style>
  .mm-scroll { overflow-x: auto; padding-bottom: 6px; }
  .mm-svg-wrap { min-width: 1360px; }
  .mm-leaf-group { cursor: pointer; }
  .mm-leaf-box { transition: stroke 0.15s, stroke-width 0.15s; }
  .mm-leaf-group:hover .mm-leaf-box { stroke: #B67A22; }
  .mm-leaf-group.selected .mm-leaf-box { stroke: #B67A22; stroke-width: 2.5; }
  #mm-detail-panel { margin-top: 14px; background: #1C2333; border-radius: 10px; padding: 20px 26px; color: #F7F4EA; display: none; }
  #mm-detail-panel.visible { display: block; }
  #mm-detail-title { font-family: 'Source Serif 4', Georgia, serif; font-size: 16px; color: #E8A33D; margin: 0 0 10px; }
  .mm-detail-label { font-size: 10.5px; letter-spacing: 0.5px; text-transform: uppercase; color: #B9AE8F; margin: 12px 0 4px; }
  .mm-detail-label:first-of-type { margin-top: 0; }
  #mm-detail-problem { font-size: 13.5px; line-height: 1.5; margin: 0; }
  #mm-detail-given, #mm-detail-formula { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; line-height: 1.6; white-space: pre-line; color: #F7F4EA; }
  #mm-detail-solution { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; line-height: 1.6; background: rgba(255,255,255,0.06); padding: 11px 13px; border-radius: 6px; border-left: 3px solid #B67A22; white-space: pre-wrap; }
  #mm-placeholder { color: #4B5468; font-size: 13px; font-style: italic; padding: 12px 0 0; }
</style>
<div class="mm-scroll"><div class="mm-svg-wrap">
<svg width="100%" viewBox="0 0 1500 950" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Time value of money formula mind map with six branches</title>
<defs>
  <marker id="mm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" fill="none" stroke="#B67A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </marker>
</defs>
<rect x="545" y="15" width="360" height="75" rx="8" fill="#1C2333"/>
<text x="725" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#F7F4EA">Core TVM Relationship</text>
<text x="725" y="70" text-anchor="middle" font-size="16" font-family="monospace" fill="#E8A33D">FV = PV &#215; (1+r)<tspan font-size="10" dy="-6">n</tspan></text>
<line x1="725" y1="90" x2="155" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="725" y1="90" x2="385" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="725" y1="90" x2="615" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="725" y1="90" x2="845" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="725" y1="90" x2="1075" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="725" y1="90" x2="1305" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<rect x="45" y="150" width="210" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/>
<rect x="45" y="150" width="4" height="62" fill="#B67A22"/>
<text x="150" y="187" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Solving for PV</text>
<rect x="275" y="150" width="210" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/>
<rect x="275" y="150" width="4" height="62" fill="#B67A22"/>
<text x="380" y="187" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Solving for FV</text>
<rect x="505" y="150" width="210" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/>
<rect x="505" y="150" width="4" height="62" fill="#B67A22"/>
<text x="610" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Solving for Rate,</text>
<text x="610" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">n, or PMT</text>
<rect x="735" y="150" width="210" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/>
<rect x="735" y="150" width="4" height="62" fill="#B67A22"/>
<text x="840" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">How the Rate (r)</text>
<text x="840" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Is Defined</text>
<rect x="965" y="150" width="210" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/>
<rect x="965" y="150" width="4" height="62" fill="#B67A22"/>
<text x="1070" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Payment Frequency</text>
<text x="1070" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">&amp; Timing</text>
<rect x="1195" y="150" width="210" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/>
<rect x="1195" y="150" width="4" height="62" fill="#B67A22"/>
<text x="1300" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">No-Arbitrage &amp;</text>
<text x="1300" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Real Instruments</text>
<line x1="150" y1="212" x2="150" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="150" y1="336" x2="150" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="150" y1="436" x2="150" y2="450" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="150" y1="536" x2="150" y2="550" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="150" y1="636" x2="150" y2="650" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="150" y1="736" x2="150" y2="750" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="mm-leaf-group" id="mm-grp-pv-single" onclick="showTVMExample('pv-single')">
<rect class="mm-leaf-box" x="45" y="250" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="45" y="250" width="3" height="86" fill="#B67A22"/>
<text x="150" y="270" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Single Sum</text>
<text x="150" y="292" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">FV</text>
<line x1="128" y1="297" x2="172" y2="297" stroke="#232C42" stroke-width="1"/>
<text x="150" y="314" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">(1+r)<tspan font-size="8" dy="-5">n</tspan></text>
<text x="150" y="332" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-pv-ordinary" onclick="showTVMExample('pv-ordinary')">
<rect class="mm-leaf-box" x="45" y="350" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="45" y="350" width="3" height="86" fill="#B67A22"/>
<text x="150" y="368" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Ordinary Annuity</text>
<text x="150" y="390" text-anchor="middle" font-size="9.5" font-family="monospace" fill="#232C42">PMT&#215;[1&#8722;(1+r)<tspan font-size="7" dy="-5">&#8722;n</tspan><tspan dy="5">]</tspan></text>
<line x1="123" y1="396" x2="177" y2="396" stroke="#232C42" stroke-width="1"/>
<text x="150" y="412" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">r</text>
<text x="150" y="432" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-pv-due" onclick="showTVMExample('pv-due')">
<rect class="mm-leaf-box" x="45" y="450" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="45" y="450" width="3" height="86" fill="#B67A22"/>
<text x="150" y="470" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Annuity Due</text>
<text x="150" y="494" text-anchor="middle" font-size="9.5" font-family="monospace" fill="#232C42">PVordinary &#215; (1+r)</text>
<text x="150" y="512" text-anchor="middle" font-size="9.5" fill="#4B5468">(beginning of period)</text>
<text x="150" y="530" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-pv-perpetuity" onclick="showTVMExample('pv-perpetuity')">
<rect class="mm-leaf-box" x="45" y="550" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="45" y="550" width="3" height="86" fill="#B67A22"/>
<text x="150" y="570" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Perpetuity</text>
<text x="150" y="592" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">PMT</text>
<line x1="133" y1="597" x2="167" y2="597" stroke="#232C42" stroke-width="1"/>
<text x="150" y="614" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">r</text>
<text x="150" y="632" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-pv-growing" onclick="showTVMExample('pv-growing')">
<rect class="mm-leaf-box" x="45" y="650" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="45" y="650" width="3" height="86" fill="#B67A22"/>
<text x="150" y="670" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Growing Perpetuity</text>
<text x="150" y="692" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">PMT1</text>
<line x1="123" y1="697" x2="177" y2="697" stroke="#232C42" stroke-width="1"/>
<text x="150" y="714" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">r &#8722; g</text>
<text x="150" y="732" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-pv-uneven" onclick="showTVMExample('pv-uneven')">
<rect class="mm-leaf-box" x="45" y="750" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="45" y="750" width="3" height="86" fill="#B67A22"/>
<text x="150" y="770" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Uneven Cash Flows</text>
<text x="150" y="792" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">CFt</text>
<line x1="128" y1="797" x2="172" y2="797" stroke="#232C42" stroke-width="1"/>
<text x="150" y="814" text-anchor="middle" font-size="10.5" font-family="monospace" fill="#232C42">(1+r)<tspan font-size="8" dy="-5">t</tspan></text>
<text x="150" y="832" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<line x1="380" y1="212" x2="380" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="380" y1="336" x2="380" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="380" y1="436" x2="380" y2="450" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="mm-leaf-group" id="mm-grp-fv-single" onclick="showTVMExample('fv-single')">
<rect class="mm-leaf-box" x="275" y="250" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="275" y="250" width="3" height="86" fill="#B67A22"/>
<text x="380" y="270" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Single Sum</text>
<text x="380" y="300" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">FV=PV&#215;(1+r)<tspan font-size="8" dy="-6">n</tspan></text>
<text x="380" y="332" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-fv-ordinary" onclick="showTVMExample('fv-ordinary')">
<rect class="mm-leaf-box" x="275" y="350" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="275" y="350" width="3" height="86" fill="#B67A22"/>
<text x="380" y="368" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Ordinary Annuity</text>
<text x="380" y="390" text-anchor="middle" font-size="9.5" font-family="monospace" fill="#232C42">PMT&#215;[(1+r)<tspan font-size="7" dy="-5">n</tspan><tspan dy="5">&#8722;1]</tspan></text>
<line x1="350" y1="396" x2="410" y2="396" stroke="#232C42" stroke-width="1"/>
<text x="380" y="412" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">r</text>
<text x="380" y="432" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-fv-due" onclick="showTVMExample('fv-due')">
<rect class="mm-leaf-box" x="275" y="450" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="275" y="450" width="3" height="86" fill="#B67A22"/>
<text x="380" y="470" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Annuity Due</text>
<text x="380" y="494" text-anchor="middle" font-size="9.5" font-family="monospace" fill="#232C42">FVordinary &#215; (1+r)</text>
<text x="380" y="512" text-anchor="middle" font-size="9.5" fill="#4B5468">(beginning of period)</text>
<text x="380" y="530" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<line x1="610" y1="212" x2="610" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="610" y1="336" x2="610" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="610" y1="436" x2="610" y2="450" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="mm-leaf-group" id="mm-grp-rate-implied" onclick="showTVMExample('rate-implied')">
<rect class="mm-leaf-box" x="505" y="250" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="505" y="250" width="3" height="86" fill="#B67A22"/>
<text x="610" y="270" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Implied Return / Yield</text>
<text x="610" y="296" text-anchor="middle" font-size="10.5" fill="#4B5468">Solve for r, given</text>
<text x="610" y="312" text-anchor="middle" font-size="10.5" fill="#4B5468">PV, cash flows, n</text>
<text x="610" y="332" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-solve-n" onclick="showTVMExample('solve-n')">
<rect class="mm-leaf-box" x="505" y="350" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="505" y="350" width="3" height="86" fill="#B67A22"/>
<text x="610" y="368" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Solving for n</text>
<text x="610" y="394" text-anchor="middle" font-size="10.5" fill="#4B5468">"How long until...?"</text>
<text x="610" y="410" text-anchor="middle" font-size="10.5" fill="#4B5468">e.g. doubling time</text>
<text x="610" y="432" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-solve-pmt" onclick="showTVMExample('solve-pmt')">
<rect class="mm-leaf-box" x="505" y="450" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="505" y="450" width="3" height="86" fill="#B67A22"/>
<text x="610" y="468" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Solving for PMT</text>
<text x="610" y="494" text-anchor="middle" font-size="10.5" fill="#4B5468">"How much to save</text>
<text x="610" y="510" text-anchor="middle" font-size="10.5" fill="#4B5468">each period?"</text>
<text x="610" y="530" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<line x1="840" y1="212" x2="840" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="840" y1="336" x2="840" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="840" y1="436" x2="840" y2="450" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="mm-leaf-group" id="mm-grp-rate-ear" onclick="showTVMExample('rate-ear')">
<rect class="mm-leaf-box" x="735" y="250" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="735" y="250" width="3" height="86" fill="#B67A22"/>
<text x="840" y="270" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Effective Annual Rate</text>
<text x="840" y="300" text-anchor="middle" font-size="10.5" font-family="monospace" fill="#232C42">EAR=(1+r/m)<tspan font-size="7" dy="-6">m</tspan><tspan dy="6">&#8722;1</tspan></text>
<text x="840" y="332" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-rate-continuous" onclick="showTVMExample('rate-continuous')">
<rect class="mm-leaf-box" x="735" y="350" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="735" y="350" width="3" height="86" fill="#B67A22"/>
<text x="840" y="370" text-anchor="middle" font-size="11" font-weight="700" fill="#232C42">Continuous Compounding</text>
<text x="840" y="404" text-anchor="middle" font-size="12.5" font-family="monospace" fill="#232C42">EAR=e<tspan font-size="9" dy="-6">r</tspan><tspan dy="6">&#8722;1</tspan></text>
<text x="840" y="432" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-rate-periodic" onclick="showTVMExample('rate-periodic')">
<rect class="mm-leaf-box" x="735" y="450" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="735" y="450" width="3" height="86" fill="#B67A22"/>
<text x="840" y="470" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Periodic Rate</text>
<text x="840" y="492" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">r</text>
<line x1="823" y1="497" x2="857" y2="497" stroke="#232C42" stroke-width="1"/>
<text x="840" y="514" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">m</text>
<text x="840" y="532" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<line x1="1070" y1="212" x2="1070" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="1070" y1="336" x2="1070" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="1070" y1="436" x2="1070" y2="450" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="mm-leaf-group" id="mm-grp-freq-monthly" onclick="showTVMExample('freq-monthly')">
<rect class="mm-leaf-box" x="965" y="250" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="965" y="250" width="3" height="86" fill="#B67A22"/>
<text x="1070" y="270" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Monthly vs. Annual</text>
<text x="1070" y="296" text-anchor="middle" font-size="10.5" font-family="monospace" fill="#232C42">n = years &#215; 12</text>
<text x="1070" y="314" text-anchor="middle" font-size="10.5" font-family="monospace" fill="#232C42">r = rate &#247; 12</text>
<text x="1070" y="332" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-freq-beginning" onclick="showTVMExample('freq-beginning')">
<rect class="mm-leaf-box" x="965" y="350" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="965" y="350" width="3" height="86" fill="#B67A22"/>
<text x="1070" y="368" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Beginning vs. End</text>
<text x="1070" y="392" text-anchor="middle" font-size="9.5" font-family="monospace" fill="#232C42">PVdue = PVord &#215; (1+r)</text>
<text x="1070" y="410" text-anchor="middle" font-size="9.5" fill="#4B5468">of each period</text>
<text x="1070" y="430" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-freq-semiannual" onclick="showTVMExample('freq-semiannual')">
<rect class="mm-leaf-box" x="965" y="450" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="965" y="450" width="3" height="86" fill="#B67A22"/>
<text x="1070" y="470" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Semiannual/Quarterly</text>
<text x="1070" y="496" text-anchor="middle" font-size="10.5" font-family="monospace" fill="#232C42">n = years &#215; m</text>
<text x="1070" y="514" text-anchor="middle" font-size="10.5" font-family="monospace" fill="#232C42">r = rate &#247; m</text>
<text x="1070" y="532" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<line x1="1300" y1="212" x2="1300" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#mm-arrow)"/>
<line x1="1300" y1="336" x2="1300" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="1300" y1="436" x2="1300" y2="450" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="mm-leaf-group" id="mm-grp-value-bond" onclick="showTVMExample('value-bond')">
<rect class="mm-leaf-box" x="1195" y="250" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="1195" y="250" width="3" height="86" fill="#B67A22"/>
<text x="1300" y="270" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Valuing a Bond</text>
<text x="1300" y="294" text-anchor="middle" font-size="10" fill="#4B5468">PV(coupon annuity)</text>
<text x="1300" y="310" text-anchor="middle" font-size="10" fill="#4B5468">+ PV(face value)</text>
<text x="1300" y="332" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-value-stock" onclick="showTVMExample('value-stock')">
<rect class="mm-leaf-box" x="1195" y="350" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="1195" y="350" width="3" height="86" fill="#B67A22"/>
<text x="1300" y="368" text-anchor="middle" font-size="11.5" font-weight="700" fill="#232C42">Valuing a Stock (DDM)</text>
<text x="1300" y="392" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">D1</text>
<line x1="1280" y1="397" x2="1320" y2="397" stroke="#232C42" stroke-width="1"/>
<text x="1300" y="414" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">r &#8722; g</text>
<text x="1300" y="432" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="mm-leaf-group" id="mm-grp-forward-implied" onclick="showTVMExample('forward-implied')">
<rect class="mm-leaf-box" x="1195" y="450" width="210" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/>
<rect x="1195" y="450" width="3" height="86" fill="#B67A22"/>
<text x="1300" y="470" text-anchor="middle" font-size="11" font-weight="700" fill="#232C42">Implied Forward Rate</text>
<text x="1300" y="494" text-anchor="middle" font-size="9.5" font-family="monospace" fill="#232C42">(1+S1)(1+f) = (1+S2)<tspan font-size="7" dy="-5">2</tspan></text>
<text x="1300" y="512" text-anchor="middle" font-size="9.5" fill="#4B5468">from no-arbitrage</text>
<text x="1300" y="530" text-anchor="middle" font-size="9.5" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
</svg>
</div></div>
<div id="mm-detail-panel">
  <div class="mm-detail-label">Word problem</div>
  <div id="mm-detail-title"></div>
  <p id="mm-detail-problem"></p>
  <div class="mm-detail-label">Given</div>
  <div id="mm-detail-given"></div>
  <div class="mm-detail-label">Formula</div>
  <div id="mm-detail-formula"></div>
  <div class="mm-detail-label">Calculation</div>
  <div id="mm-detail-solution"></div>
</div>
<div id="mm-placeholder">Click any formula box above to see a worked example.</div>
`;

const EXHIBIT_FI_MINDMAP_SVG = `
<style>
  .fi-mm-scroll { overflow-x: auto; padding-bottom: 6px; }
  .fi-mm-svg-wrap { min-width: 1080px; }
  .fi-mm-leaf-group { cursor: pointer; }
  .fi-mm-leaf-box { transition: stroke 0.15s, stroke-width 0.15s; }
  .fi-mm-leaf-group:hover .fi-mm-leaf-box { stroke: #B67A22; }
  .fi-mm-leaf-group.selected .fi-mm-leaf-box { stroke: #B67A22; stroke-width: 2.5; }
  #fi-mm-detail-panel { margin-top: 14px; background: #1C2333; border-radius: 10px; padding: 20px 26px; color: #F7F4EA; display: none; }
  #fi-mm-detail-panel.visible { display: block; }
  #fi-mm-detail-title { font-family: 'Source Serif 4', Georgia, serif; font-size: 16px; color: #E8A33D; margin: 0 0 10px; }
  .mm-detail-label { font-size: 10.5px; letter-spacing: 0.5px; text-transform: uppercase; color: #B9AE8F; margin: 12px 0 4px; }
  .mm-detail-label:first-of-type { margin-top: 0; }
  #fi-mm-detail-problem { font-size: 13.5px; line-height: 1.5; margin: 0; }
  #fi-mm-detail-given, #fi-mm-detail-formula { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; line-height: 1.6; white-space: pre-line; color: #F7F4EA; }
  #fi-mm-detail-solution { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; line-height: 1.6; background: rgba(255,255,255,0.06); padding: 11px 13px; border-radius: 6px; border-left: 3px solid #B67A22; white-space: pre-wrap; }
  #fi-mm-placeholder { color: #4B5468; font-size: 13px; font-style: italic; padding: 12px 0 0; }
</style>
<div class="fi-mm-scroll"><div class="fi-mm-svg-wrap">
<svg width="100%" viewBox="0 0 1080 600" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Fixed income formula mind map with three branches</title>
<defs><marker id="fi-mm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#B67A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<rect x="400" y="15" width="280" height="75" rx="8" fill="#1C2333"/>
<text x="540" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#F7F4EA">Bond Value</text>
<text x="540" y="68" text-anchor="middle" font-size="13" font-family="monospace" fill="#E8A33D">Price = PV(all future cash flows)</text>
<line x1="540" y1="90" x2="175" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fi-mm-arrow)"/>
<line x1="540" y1="90" x2="540" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fi-mm-arrow)"/>
<line x1="540" y1="90" x2="905" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fi-mm-arrow)"/>
<rect x="45" y="150" width="260" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/><rect x="45" y="150" width="4" height="62" fill="#B67A22"/>
<text x="175" y="187" text-anchor="middle" font-size="12.5" font-weight="700" fill="#232C42">Pricing a Bond</text>
<rect x="410" y="150" width="260" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/><rect x="410" y="150" width="4" height="62" fill="#B67A22"/>
<text x="540" y="187" text-anchor="middle" font-size="12.5" font-weight="700" fill="#232C42">Yield &amp; Settlement</text>
<rect x="775" y="150" width="260" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/><rect x="775" y="150" width="4" height="62" fill="#B67A22"/>
<text x="905" y="187" text-anchor="middle" font-size="12.5" font-weight="700" fill="#232C42">Interest Rate Risk</text>
<line x1="175" y1="212" x2="175" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fi-mm-arrow)"/>
<line x1="175" y1="336" x2="175" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="fi-mm-leaf-group" id="fi-mm-grp-coupon-bond" onclick="showFIExample('coupon-bond')">
<rect class="fi-mm-leaf-box" x="45" y="250" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="45" y="250" width="3" height="86" fill="#B67A22"/>
<text x="175" y="272" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Coupon Bond</text>
<text x="175" y="296" text-anchor="middle" font-size="11" fill="#4B5468">PV(coupon annuity)</text>
<text x="175" y="312" text-anchor="middle" font-size="11" fill="#4B5468">+ PV(face value)</text>
<text x="175" y="332" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="fi-mm-leaf-group" id="fi-mm-grp-zero-coupon" onclick="showFIExample('zero-coupon')">
<rect class="fi-mm-leaf-box" x="45" y="350" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="45" y="350" width="3" height="86" fill="#B67A22"/>
<text x="175" y="372" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Zero-Coupon Bond</text>
<text x="175" y="396" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">Face</text>
<line x1="150" y1="401" x2="200" y2="401" stroke="#232C42" stroke-width="1"/>
<text x="175" y="418" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">(1+r)<tspan font-size="8" dy="-5">n</tspan></text>
<text x="175" y="432" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<line x1="540" y1="212" x2="540" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fi-mm-arrow)"/>
<line x1="540" y1="336" x2="540" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="fi-mm-leaf-group" id="fi-mm-grp-current-yield" onclick="showFIExample('current-yield')">
<rect class="fi-mm-leaf-box" x="410" y="250" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="410" y="250" width="3" height="86" fill="#B67A22"/>
<text x="540" y="272" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Current Yield</text>
<text x="540" y="296" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">Coupon</text>
<line x1="510" y1="301" x2="570" y2="301" stroke="#232C42" stroke-width="1"/>
<text x="540" y="318" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">Price</text>
<text x="540" y="332" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="fi-mm-leaf-group" id="fi-mm-grp-accrued-interest" onclick="showFIExample('accrued-interest')">
<rect class="fi-mm-leaf-box" x="410" y="350" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="410" y="350" width="3" height="86" fill="#B67A22"/>
<text x="540" y="372" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Accrued Interest</text>
<text x="540" y="396" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">Coupon &#215; (days/360)</text>
<text x="540" y="414" text-anchor="middle" font-size="10" fill="#4B5468">\u2192 dirty price</text>
<text x="540" y="432" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<line x1="905" y1="212" x2="905" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fi-mm-arrow)"/>
<line x1="905" y1="336" x2="905" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="905" y1="436" x2="905" y2="450" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="fi-mm-leaf-group" id="fi-mm-grp-modified-duration" onclick="showFIExample('modified-duration')">
<rect class="fi-mm-leaf-box" x="775" y="250" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="775" y="250" width="3" height="86" fill="#B67A22"/>
<text x="905" y="272" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Modified Duration</text>
<text x="905" y="296" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">Macaulay</text>
<line x1="865" y1="301" x2="945" y2="301" stroke="#232C42" stroke-width="1"/>
<text x="905" y="318" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">1 + yield</text>
<text x="905" y="332" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="fi-mm-leaf-group" id="fi-mm-grp-duration-price" onclick="showFIExample('duration-price')">
<rect class="fi-mm-leaf-box" x="775" y="350" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="775" y="350" width="3" height="86" fill="#B67A22"/>
<text x="905" y="372" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Price Chg. from Duration</text>
<text x="905" y="400" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">%\u0394P \u2248 \u2212Dur \u00D7 \u0394y</text>
<text x="905" y="432" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="fi-mm-leaf-group" id="fi-mm-grp-duration-convexity" onclick="showFIExample('duration-convexity')">
<rect class="fi-mm-leaf-box" x="775" y="450" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="775" y="450" width="3" height="86" fill="#B67A22"/>
<text x="905" y="470" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Duration + Convexity</text>
<text x="905" y="492" text-anchor="middle" font-size="10.5" fill="#4B5468">Adds a convexity term</text>
<text x="905" y="508" text-anchor="middle" font-size="10.5" fill="#4B5468">for larger \u0394y</text>
<text x="905" y="530" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
</svg>
</div></div>
<div id="fi-mm-detail-panel">
  <div class="mm-detail-label">Word problem</div>
  <div id="fi-mm-detail-title"></div>
  <p id="fi-mm-detail-problem"></p>
  <div class="mm-detail-label">Given</div>
  <div id="fi-mm-detail-given"></div>
  <div class="mm-detail-label">Formula</div>
  <div id="fi-mm-detail-formula"></div>
  <div class="mm-detail-label">Calculation</div>
  <div id="fi-mm-detail-solution"></div>
</div>
<div id="fi-mm-placeholder">Click any formula box above to see a worked example.</div>
`;

const EXHIBIT_PM_MINDMAP_SVG = `
<style>
  .pm-mm-scroll { overflow-x: auto; padding-bottom: 6px; }
  .pm-mm-svg-wrap { min-width: 900px; }
  .pm-mm-leaf-group { cursor: pointer; }
  .pm-mm-leaf-box { transition: stroke 0.15s, stroke-width 0.15s; }
  .pm-mm-leaf-group:hover .pm-mm-leaf-box { stroke: #B67A22; }
  .pm-mm-leaf-group.selected .pm-mm-leaf-box { stroke: #B67A22; stroke-width: 2.5; }
  #pm-mm-detail-panel { margin-top: 14px; background: #1C2333; border-radius: 10px; padding: 20px 26px; color: #F7F4EA; display: none; }
  #pm-mm-detail-panel.visible { display: block; }
  #pm-mm-detail-title { font-family: 'Source Serif 4', Georgia, serif; font-size: 16px; color: #E8A33D; margin: 0 0 10px; }
  #pm-mm-detail-problem { font-size: 13.5px; line-height: 1.5; margin: 0; }
  #pm-mm-detail-given, #pm-mm-detail-formula { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; line-height: 1.6; white-space: pre-line; color: #F7F4EA; }
  #pm-mm-detail-solution { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; line-height: 1.6; background: rgba(255,255,255,0.06); padding: 11px 13px; border-radius: 6px; border-left: 3px solid #B67A22; white-space: pre-wrap; }
  #pm-mm-placeholder { color: #4B5468; font-size: 13px; font-style: italic; padding: 12px 0 0; }
</style>
<div class="pm-mm-scroll"><div class="pm-mm-svg-wrap">
<svg width="100%" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Portfolio management formula mind map with two branches</title>
<defs><marker id="pm-mm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#B67A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<g class="pm-mm-leaf-group" id="pm-mm-grp-capm" onclick="showPMExample('capm')" style="cursor:pointer">
<rect class="pm-mm-leaf-box" x="270" y="15" width="360" height="80" rx="8" fill="#1C2333"/>
<text x="450" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#F7F4EA">Core: CAPM</text>
<text x="450" y="66" text-anchor="middle" font-size="13" font-family="monospace" fill="#E8A33D">E(Ri) = Rf + \u03B2i&#215;[E(Rm)\u2212Rf]</text>
<text x="450" y="85" text-anchor="middle" font-size="9.5" font-style="italic" fill="#D69438">Example &#8594;</text>
</g>
<line x1="280" y1="95" x2="230" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#pm-mm-arrow)"/>
<line x1="620" y1="95" x2="670" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#pm-mm-arrow)"/>
<rect x="65" y="150" width="330" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/><rect x="65" y="150" width="4" height="62" fill="#B67A22"/>
<text x="230" y="187" text-anchor="middle" font-size="12.5" font-weight="700" fill="#232C42">Building the Portfolio</text>
<rect x="505" y="150" width="330" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/><rect x="505" y="150" width="4" height="62" fill="#B67A22"/>
<text x="670" y="187" text-anchor="middle" font-size="12.5" font-weight="700" fill="#232C42">Evaluating Performance</text>
<line x1="230" y1="212" x2="230" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#pm-mm-arrow)"/>
<line x1="230" y1="336" x2="230" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="pm-mm-leaf-group" id="pm-mm-grp-port-return" onclick="showPMExample('port-return')">
<rect class="pm-mm-leaf-box" x="65" y="250" width="330" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="65" y="250" width="3" height="86" fill="#B67A22"/>
<text x="230" y="272" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Portfolio Expected Return</text>
<text x="230" y="298" text-anchor="middle" font-size="13" font-family="monospace" fill="#232C42">E(Rp) = \u03A3 [wi &#215; E(Ri)]</text>
<text x="230" y="332" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="pm-mm-leaf-group" id="pm-mm-grp-min-var" onclick="showPMExample('min-var')">
<rect class="pm-mm-leaf-box" x="65" y="350" width="330" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="65" y="350" width="3" height="86" fill="#B67A22"/>
<text x="230" y="370" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Minimum-Variance Weight</text>
<text x="230" y="394" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">\u03C32\u00B2 \u2212 Cov(1,2)</text>
<line x1="180" y1="399" x2="280" y2="399" stroke="#232C42" stroke-width="1"/>
<text x="230" y="416" text-anchor="middle" font-size="10.5" font-family="monospace" fill="#232C42">\u03C31\u00B2+\u03C32\u00B2\u22122Cov(1,2)</text>
<text x="230" y="432" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<line x1="670" y1="212" x2="670" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#pm-mm-arrow)"/>
<line x1="670" y1="336" x2="670" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="670" y1="436" x2="670" y2="450" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="pm-mm-leaf-group" id="pm-mm-grp-sharpe" onclick="showPMExample('sharpe')">
<rect class="pm-mm-leaf-box" x="505" y="250" width="330" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="505" y="250" width="3" height="86" fill="#B67A22"/>
<text x="670" y="272" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Sharpe Ratio</text>
<text x="670" y="296" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">Rp \u2212 Rf</text>
<line x1="640" y1="301" x2="700" y2="301" stroke="#232C42" stroke-width="1"/>
<text x="670" y="318" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">\u03C3p (total risk)</text>
<text x="670" y="332" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="pm-mm-leaf-group" id="pm-mm-grp-treynor" onclick="showPMExample('treynor')">
<rect class="pm-mm-leaf-box" x="505" y="350" width="330" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="505" y="350" width="3" height="86" fill="#B67A22"/>
<text x="670" y="372" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Treynor Ratio</text>
<text x="670" y="396" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">Rp \u2212 Rf</text>
<line x1="640" y1="401" x2="700" y2="401" stroke="#232C42" stroke-width="1"/>
<text x="670" y="418" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">\u03B2p (systematic risk)</text>
<text x="670" y="432" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="pm-mm-leaf-group" id="pm-mm-grp-jensen" onclick="showPMExample('jensen')">
<rect class="pm-mm-leaf-box" x="505" y="450" width="330" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="505" y="450" width="3" height="86" fill="#B67A22"/>
<text x="670" y="472" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Jensen's Alpha</text>
<text x="670" y="500" text-anchor="middle" font-size="11" fill="#4B5468">Actual return \u2212</text>
<text x="670" y="516" text-anchor="middle" font-size="11" fill="#4B5468">CAPM-predicted return</text>
<text x="670" y="532" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
</svg>
</div></div>
<div id="pm-mm-detail-panel">
  <div class="mm-detail-label">Word problem</div>
  <div id="pm-mm-detail-title"></div>
  <p id="pm-mm-detail-problem"></p>
  <div class="mm-detail-label">Given</div>
  <div id="pm-mm-detail-given"></div>
  <div class="mm-detail-label">Formula</div>
  <div id="pm-mm-detail-formula"></div>
  <div class="mm-detail-label">Calculation</div>
  <div id="pm-mm-detail-solution"></div>
</div>
<div id="pm-mm-placeholder">Click any formula box above to see a worked example.</div>
`;

const EXHIBIT_FSA_MINDMAP_SVG = `
<style>
  .fsa-mm-scroll { overflow-x: auto; padding-bottom: 6px; }
  .fsa-mm-svg-wrap { min-width: 1080px; }
  .fsa-mm-leaf-group { cursor: pointer; }
  .fsa-mm-leaf-box { transition: stroke 0.15s, stroke-width 0.15s; }
  .fsa-mm-leaf-group:hover .fsa-mm-leaf-box { stroke: #B67A22; }
  .fsa-mm-leaf-group.selected .fsa-mm-leaf-box { stroke: #B67A22; stroke-width: 2.5; }
  #fsa-mm-detail-panel { margin-top: 14px; background: #1C2333; border-radius: 10px; padding: 20px 26px; color: #F7F4EA; display: none; }
  #fsa-mm-detail-panel.visible { display: block; }
  #fsa-mm-detail-title { font-family: 'Source Serif 4', Georgia, serif; font-size: 16px; color: #E8A33D; margin: 0 0 10px; }
  #fsa-mm-detail-problem { font-size: 13.5px; line-height: 1.5; margin: 0; }
  #fsa-mm-detail-given, #fsa-mm-detail-formula { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; line-height: 1.6; white-space: pre-line; color: #F7F4EA; }
  #fsa-mm-detail-solution { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; line-height: 1.6; background: rgba(255,255,255,0.06); padding: 11px 13px; border-radius: 6px; border-left: 3px solid #B67A22; white-space: pre-wrap; }
  #fsa-mm-placeholder { color: #4B5468; font-size: 13px; font-style: italic; padding: 12px 0 0; }
</style>
<div class="fsa-mm-scroll"><div class="fsa-mm-svg-wrap">
<svg width="100%" viewBox="0 0 1080 600" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Financial statement analysis formula mind map with three branches</title>
<defs><marker id="fsa-mm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#B67A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<g class="fsa-mm-leaf-group" id="fsa-mm-grp-dupont" onclick="showFSAExample('dupont')" style="cursor:pointer">
<rect class="fsa-mm-leaf-box" x="370" y="15" width="340" height="80" rx="8" fill="#1C2333"/>
<text x="540" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#F7F4EA">Core: DuPont Analysis</text>
<text x="540" y="66" text-anchor="middle" font-size="12.5" font-family="monospace" fill="#E8A33D">ROE = Margin &#215; Turnover &#215; Leverage</text>
<text x="540" y="85" text-anchor="middle" font-size="9.5" font-style="italic" fill="#D69438">Example &#8594;</text>
</g>
<line x1="540" y1="95" x2="175" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fsa-mm-arrow)"/>
<line x1="540" y1="95" x2="540" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fsa-mm-arrow)"/>
<line x1="540" y1="95" x2="905" y2="148" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fsa-mm-arrow)"/>
<rect x="45" y="150" width="260" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/><rect x="45" y="150" width="4" height="62" fill="#B67A22"/>
<text x="175" y="187" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Liquidity &amp; Solvency</text>
<rect x="410" y="150" width="260" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/><rect x="410" y="150" width="4" height="62" fill="#B67A22"/>
<text x="540" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Profitability &amp;</text>
<text x="540" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Efficiency</text>
<rect x="775" y="150" width="260" height="62" rx="6" fill="#EFE8D2" stroke="#CFC7AE"/><rect x="775" y="150" width="4" height="62" fill="#B67A22"/>
<text x="905" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Per-Share &amp;</text>
<text x="905" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Cash Flow</text>
<line x1="175" y1="212" x2="175" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fsa-mm-arrow)"/>
<line x1="175" y1="336" x2="175" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="fsa-mm-leaf-group" id="fsa-mm-grp-current-ratio" onclick="showFSAExample('current-ratio')">
<rect class="fsa-mm-leaf-box" x="45" y="250" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="45" y="250" width="3" height="86" fill="#B67A22"/>
<text x="175" y="272" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Current Ratio</text>
<text x="175" y="296" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">Current assets</text>
<line x1="130" y1="301" x2="220" y2="301" stroke="#232C42" stroke-width="1"/>
<text x="175" y="318" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">Current liabilities</text>
<text x="175" y="332" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="fsa-mm-leaf-group" id="fsa-mm-grp-debt-equity" onclick="showFSAExample('debt-equity')">
<rect class="fsa-mm-leaf-box" x="45" y="350" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="45" y="350" width="3" height="86" fill="#B67A22"/>
<text x="175" y="372" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Debt-to-Equity</text>
<text x="175" y="396" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">Total debt</text>
<line x1="140" y1="401" x2="210" y2="401" stroke="#232C42" stroke-width="1"/>
<text x="175" y="418" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">Total equity</text>
<text x="175" y="432" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<line x1="540" y1="212" x2="540" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fsa-mm-arrow)"/>
<line x1="540" y1="336" x2="540" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<line x1="540" y1="436" x2="540" y2="450" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="fsa-mm-leaf-group" id="fsa-mm-grp-net-margin" onclick="showFSAExample('net-margin')">
<rect class="fsa-mm-leaf-box" x="410" y="250" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="410" y="250" width="3" height="86" fill="#B67A22"/>
<text x="540" y="272" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Net Profit Margin</text>
<text x="540" y="296" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">Net income</text>
<line x1="500" y1="301" x2="580" y2="301" stroke="#232C42" stroke-width="1"/>
<text x="540" y="318" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">Revenue</text>
<text x="540" y="332" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="fsa-mm-leaf-group" id="fsa-mm-grp-inv-turnover" onclick="showFSAExample('inv-turnover')">
<rect class="fsa-mm-leaf-box" x="410" y="350" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="410" y="350" width="3" height="86" fill="#B67A22"/>
<text x="540" y="370" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Inventory Turnover</text>
<text x="540" y="394" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">COGS</text>
<line x1="495" y1="399" x2="585" y2="399" stroke="#232C42" stroke-width="1"/>
<text x="540" y="416" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">Avg. inventory</text>
<text x="540" y="432" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="fsa-mm-leaf-group" id="fsa-mm-grp-common-size" onclick="showFSAExample('common-size')">
<rect class="fsa-mm-leaf-box" x="410" y="450" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="410" y="450" width="3" height="86" fill="#B67A22"/>
<text x="540" y="472" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Common-Size %</text>
<text x="540" y="496" text-anchor="middle" font-size="12" font-family="monospace" fill="#232C42">Line item</text>
<line x1="500" y1="501" x2="580" y2="501" stroke="#232C42" stroke-width="1"/>
<text x="540" y="518" text-anchor="middle" font-size="11" font-family="monospace" fill="#232C42">Total revenue</text>
<text x="540" y="532" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<line x1="905" y1="212" x2="905" y2="250" stroke="#CFC7AE" stroke-width="1.5" marker-end="url(#fsa-mm-arrow)"/>
<line x1="905" y1="336" x2="905" y2="350" stroke="#CFC7AE" stroke-width="1.5"/>
<g class="fsa-mm-leaf-group" id="fsa-mm-grp-eps" onclick="showFSAExample('eps')">
<rect class="fsa-mm-leaf-box" x="775" y="250" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="775" y="250" width="3" height="86" fill="#B67A22"/>
<text x="905" y="270" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Basic EPS</text>
<text x="905" y="292" text-anchor="middle" font-size="10.5" font-family="monospace" fill="#232C42">NI \u2212 Pref. div.</text>
<line x1="855" y1="297" x2="955" y2="297" stroke="#232C42" stroke-width="1"/>
<text x="905" y="314" text-anchor="middle" font-size="10" font-family="monospace" fill="#232C42">Wtd. avg. shares</text>
<text x="905" y="332" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
<g class="fsa-mm-leaf-group" id="fsa-mm-grp-fcff" onclick="showFSAExample('fcff')">
<rect class="fsa-mm-leaf-box" x="775" y="350" width="260" height="86" rx="6" fill="#FDFCF8" stroke="#CFC7AE"/><rect x="775" y="350" width="3" height="86" fill="#B67A22"/>
<text x="905" y="370" text-anchor="middle" font-size="12" font-weight="700" fill="#232C42">Free Cash Flow (FCFF)</text>
<text x="905" y="392" text-anchor="middle" font-size="10" fill="#4B5468">NI + Non-cash + Int(1\u2212t)</text>
<text x="905" y="408" text-anchor="middle" font-size="10" fill="#4B5468">\u2212 CapEx \u2212 \u0394WC</text>
<text x="905" y="432" text-anchor="middle" font-size="10" font-style="italic" fill="#B67A22">Example &#8594;</text>
</g>
</svg>
</div></div>
<div id="fsa-mm-detail-panel">
  <div class="mm-detail-label">Word problem</div>
  <div id="fsa-mm-detail-title"></div>
  <p id="fsa-mm-detail-problem"></p>
  <div class="mm-detail-label">Given</div>
  <div id="fsa-mm-detail-given"></div>
  <div class="mm-detail-label">Formula</div>
  <div id="fsa-mm-detail-formula"></div>
  <div class="mm-detail-label">Calculation</div>
  <div id="fsa-mm-detail-solution"></div>
</div>
<div id="fsa-mm-placeholder">Click any formula box above to see a worked example.</div>
`;

const CHAPTERS = [
  {
    id: "calc",
    number: "01",
    title: "Calculator Fundamentals",
    subtitle: "Two permitted calculators, two different logics — set this up before anything else",
    sections: [
      {
        id: "calc-1",
        title: "Why this chapter comes first",
        body: [
          `Almost every quantitative question on the Level 1 exam — time value of money, bond pricing, portfolio returns — ends the same way: you plug numbers into a calculator. If you don't know your calculator cold, you will lose time and points on problems you actually understand conceptually.`,
          `CFA Institute permits exactly two calculator models in the exam room: the Texas Instruments BA II Plus (including the Professional version) and the Hewlett-Packard HP 12C (including the 12C Platinum). No other calculator is allowed.`,
          `These two machines don't just look different — they run on two different systems of logic. The TI uses standard algebraic entry, the same left-to-right order you'd use on a phone calculator. The HP uses Reverse Polish Notation (RPN), a stack-based system that has no equals sign at all.`,
          `This chapter assumes you have never touched either calculator and have never heard the term RPN. We'll build both from zero, then solve one identical problem on each so you can see exactly where the mechanics diverge.`,
        ],
        formulas: [],
      },
      {
        id: "calc-2",
        title: "Standard algebraic entry (TI BA II Plus) — plain arithmetic first",
        body: [
          `Before touching anything finance-specific, get comfortable with how this calculator handles ordinary math. The TI BA II Plus works the way you already expect a calculator to work: you type numbers and operators in the order you'd say them out loud, then press "=" to get a result.`,
          `Example 1 — a single operation. Compute 8 + 5. Keystrokes: 8, +, 5, =. Result: 13. Nothing surprising here.`,
          `Example 2 — two operations, order matters. Compute 2 + 3 × 4. Keystrokes: 2, +, 3, ×, 4, =. Result: 14, not 20 — the calculator applies standard order of operations automatically, multiplying 3 × 4 first, then adding 2.`,
          `Example 3 — a calculation with no shortcut key. Compute (8 + 5) × 3. Since this calculator model doesn't expose parenthesis keys the way a scientific calculator does, you compute the inner step first, then continue: 8, +, 5, = gives 13, then ×, 3, = gives 39. The result of any calculation stays on screen and can be built on directly.`,
          `The habit to build here, before any TVM problem: read the whole expression first, decide what has to be computed before what, and only then start pressing keys.`,
        ],
        formulas: [],
      },
      {
        id: "calc-3",
        title: "The TI's time value of money worksheet",
        body: [
          `Once basic entry feels automatic, the TVM worksheet is a separate mode layered on top of it — five storage slots the calculator uses together to solve time-value problems: N (number of periods), I/Y (interest rate per year), PV (present value), PMT (payment), and FV (future value). You type a known value, press the matching key to store it, repeat for each known value, then press CPT (compute) followed by the key you're solving for.`,
          `Critical habit: clear the TVM worksheet before every new problem with 2ND, CLR TVM. Old values left in the worksheet from a previous question are the single most common source of wrong answers on calculator-based questions.`,
          `Sign convention: money leaving your pocket (an investment you make, a price you pay) is entered as negative. Money coming to you (a payout, a future amount you receive) is entered as positive. Get this backwards and your answer will have the wrong sign — or the calculator will error.`,
        ],
        formulas: [
          { id: "calc-3-sign", name: "Cash flow sign convention", expression: "Outflow = \u2212      Inflow = +", when: "Applies to every PV/PMT/FV entry on both calculators, every time." },
        ],
      },
      {
        id: "calc-4",
        title: "Reverse Polish Notation, from zero (HP 12C) — plain arithmetic first",
        body: [
          `Forget everything about "=" for a moment. The HP 12C stores numbers on a stack — a small vertical pile, with the newest number always sitting on top. Operators don't sit between two numbers the way "+" does in 2 + 3. Instead, an operator acts on whatever is already sitting on the stack.`,
          `The ENTER key pushes a number onto the stack and duplicates it, freeing you to type the next number without it merging into the first.`,
          `Example 1 — a single operation. Compute 2 + 3. Keystrokes: 2, ENTER, 3, +. Walk the stack step by step: press 2 -> stack holds [2]. Press ENTER -> stack holds [2, 2] (duplicated, waiting). Press 3 -> overwrites the duplicate -> stack holds [2, 3]. Press + -> pops both, adds, pushes result -> stack holds [5].`,
          `Example 2 — two operations, no parentheses needed. Compute (4 + 2) × (7 − 3). On the HP, you compute each inner step in the order you want, and the stack holds the results for you: 4, ENTER, 2, + computes 4+2, stack holds [6]. Then 7, ENTER, 3, − computes 7−3, stack holds [6, 4] (the 6 is still waiting underneath). Then × pops the top two values, multiplies, stack holds [24].`,
          `Notice what happened: you never needed a parenthesis key, and you never had to remember an intermediate result on paper. The stack held it for you. This becomes powerful on multi-step TVM problems for exactly the same reason. It feels backwards for the first hour and automatic by the end of the week.`,
        ],
        formulas: [],
        interactiveExhibit: "rpnStepper",
      },
      {
        id: "calc-5",
        title: "The HP 12C's time value of money keys",
        body: [
          `TVM on the HP 12C uses dedicated keys — n, i, PV, PMT, FV — that work like registers rather than a "worksheet." You still enter knowns into their keys, but there is no separate CPT key: pressing the key for the unknown value itself triggers the computation.`,
        ],
        formulas: [],
      },
      {
        id: "calc-6",
        title: "Side-by-side: one TVM problem, two calculators",
        body: [
          `Problem: you invest $10,000 today at 6% annual interest, compounded annually. What is it worth in 10 years?`,
          `TI BA II Plus: 2ND, CLR TVM -> 10, N -> 6, I/Y -> 10000, +/-, PV -> 0, PMT -> CPT, FV. Result: 17,908.48.`,
          `HP 12C: 10000, CHS, PV -> 6, i -> 10, n -> 0, PMT -> FV. Result: 17,908.48.`,
          `The sign convention is identical on both machines. The order of keystrokes differs because one machine expects an explicit compute step (CPT) while the other treats the unknown's own key as the trigger.`,
        ],
        formulas: [],
      },
      {
        id: "calc-7",
        title: "Setup traps that cost points",
        type: "reference",
        body: [`A handful of default settings quietly produce wrong answers if you don't check them before a problem.`],
        referenceRows: [
          { item: "P/Y (payments per year) — TI only", detail: "Defaults to 12. Most exam problems assume annual compounding — reset P/Y to 1 (2ND, P/Y, 1, ENTER) or you'll silently compute monthly instead of annual periods." },
          { item: "END vs. BEGIN mode", detail: "Both calculators default to END (ordinary annuity). Annuity-due problems require switching to BEGIN (TI: 2ND BGN 2ND SET; HP: g, BEG) — and switching back afterward." },
          { item: "Clearing between problems", detail: "TI: 2ND, CLR TVM. HP: clear each register or do a full memory clear. Skipping this carries stale numbers into your next answer." },
          { item: "Sign convention consistency", detail: "PV and FV (or PMT) must have opposite signs for the TVM worksheet to solve correctly. Both positive → error or nonsense result." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "tvm",
    number: "02",
    title: "Time Value of Money",
    subtitle: "Quantitative Methods: the single idea underneath bonds, equities, and corporate finance",
    sections: [
      {
        id: "tvm-1",
        title: "Overview",
        body: [
          `Time value of money (TVM) is the idea that a dollar today is worth more than a dollar received later, because today's dollar can be invested and earn a return between now and then.`,
          `Every other quantitative topic on Level 1 — bond pricing, equity valuation, capital budgeting — is TVM applied to a specific situation. Master this chapter and those later chapters become "which TVM formula applies here" rather than new math.`,
          `The goal isn't to memorize five formulas in isolation. It's to recognize, from how a problem is worded, which of five situations you're in — then reach for the formula that matches it. Section 7 of this chapter is built specifically around that skill.`,
        ],
        formulas: [],
      },
      {
        id: "tvm-2",
        title: "Core vocabulary: timelines, rates, and compounding",
        body: [
          `Picture every TVM problem as a timeline: time 0 is today, and cash flows sit at points 1, 2, 3... n, one per period. Compounding moves you forward in time (finding what a value grows to). Discounting moves you backward (finding what a future value is worth today). Same formula, solved for a different variable.`,
          `Interest rates come in more than one flavor. The stated (nominal) annual rate is quoted per year but may compound more often than once a year. The periodic rate is the stated rate divided by the number of compounding periods per year. The effective annual rate (EAR) is the true annual return after accounting for that compounding.`,
          `Compounding frequency (m): annual = 1, semiannual = 2, quarterly = 4, monthly = 12. Whenever compounding frequency doesn't match payment frequency, convert rates before touching a formula — one of the most common trap setups on the exam.`,
        ],
        exhibits: [{ afterParagraph: 2, svg: EXHIBIT_COMPOUNDING }],
        formulas: [
          { id: "tvm-2-ear", name: "Effective annual rate (EAR)", expression: "EAR = (1 + rstated/m)<sup>m</sup> \u2212 1", when: "Use whenever you need a true annual return to compare two investments that compound at different frequencies.", given: ["rstated = 0.08", "m = 4 (quarterly)"], worked: "EAR = (1 + 0.08/4)<sup>4</sup> \u2212 1\nEAR = (1.02)<sup>4</sup> \u2212 1\nEAR \u2248 8.24%\n\n(higher than the quoted 8%, because quarterly\ncompounding earns interest on interest four times a year)", workedExhibit: EXHIBIT_WORKED_EAR },
          { id: "tvm-2-ear-cont", name: "EAR with continuous compounding — advanced", expression: "EAR = e<sup>rstated</sup> \u2212 1", when: "Rare on Level 1; appears when a problem explicitly says \"continuously compounded.\"", given: ["rstated = 0.08"], worked: "EAR = e<sup>0.08</sup> \u2212 1\nEAR \u2248 8.33%\n\n(slightly higher still than quarterly compounding \u2014\ncontinuous compounding is the limiting case)" },
        ],
      },
      {
        id: "tvm-3",
        title: "Single sum (lump sum) problems",
        body: [
          `A single-sum problem has exactly one cash flow — one amount, at one point in time — and asks for its value at a different point in time. If you're moving a known present amount forward to a later date, you're compounding: solve for future value. If you're moving a known future amount backward to today, you're discounting: solve for present value.`,
        ],
        exhibits: [{ afterParagraph: 0, svg: EXHIBIT_SINGLE_SUM }],
        formulas: [
          { id: "tvm-3-fv", name: "Future value of a single sum", expression: "FV = PV \u00D7 (1 + r)<sup>n</sup>", when: "Wording cue: \"invest/deposit a lump sum today... worth in the future.\"", given: ["PV = $5,000", "r = 0.06", "n = 10"], worked: "FV = 5,000 \u00D7 (1.06)<sup>10</sup>\nFV = 5,000 \u00D7 1.7908\nFV \u2248 $8,954", workedExhibit: EXHIBIT_WORKED_FV },
          { id: "tvm-3-pv", name: "Present value of a single sum", expression: "PV = <span class=\"frac\"><span class=\"num\">FV</span><span class=\"den\">(1 + r)<sup>n</sup></span></span>", when: "Wording cue: \"receive a single amount in the future... worth today.\"", given: ["FV = $10,000", "r = 0.07", "n = 5"], worked: "PV = 10,000 / (1.07)<sup>5</sup>\nPV = 10,000 / 1.4026\nPV \u2248 $7,130", workedExhibit: EXHIBIT_WORKED_PV },
        ],
      },
      {
        id: "tvm-4",
        title: "Annuities: ordinary vs. due",
        body: [
          `An annuity is a series of equal payments at equal intervals. There are two flavors, and the exam leans heavily on your ability to tell them apart from the wording alone.`,
          `An ordinary annuity pays at the end of each period. This is the default assumption unless a problem says otherwise.`,
          `An annuity due pays at the beginning of each period. Watch for phrases like "at the start of each year."`,
          `An annuity due is always worth more than an otherwise-identical ordinary annuity, because each payment is received one period earlier and has more time to earn a return. You never need a separate memorized formula — it's one multiplication away.`,
        ],
        exhibits: [{ afterParagraph: 3, svg: EXHIBIT_ANNUITY }],
        formulas: [
          { id: "tvm-4-fv-ord", name: "FV of an ordinary annuity", expression: "FV = PMT \u00D7 <span class=\"frac\"><span class=\"num\">(1+r)<sup>n</sup> \u2212 1</span><span class=\"den\">r</span></span>", when: "Equal end-of-period payments; solving for a future accumulated value.", given: ["PMT = $2,000", "r = 0.05", "n = 8"], worked: "FV = 2,000 \u00D7 [((1.05)<sup>8</sup> \u2212 1) / 0.05]\nFV = 2,000 \u00D7 9.549\nFV \u2248 $19,098", workedExhibit: EXHIBIT_WORKED_ANNUITY_FV },
          { id: "tvm-4-pv-ord", name: "PV of an ordinary annuity", expression: "PV = PMT \u00D7 <span class=\"frac\"><span class=\"num\">1 \u2212 (1+r)<sup>−n</sup></span><span class=\"den\">r</span></span>", when: "Equal end-of-period payments; solving for today's value of the stream.", given: ["PMT = $1,500", "r = 0.04", "n = 6"], worked: "PV = 1,500 \u00D7 [1 \u2212 (1.04)<sup>−6</sup>] / 0.04\nPV = 1,500 \u00D7 5.242\nPV \u2248 $7,863" },
          { id: "tvm-4-due", name: "Annuity due adjustment — advanced", expression: "FVdue = FVordinary \u00D7 (1+r)\nPVdue = PVordinary \u00D7 (1+r)", when: "Same payment stream, but each payment occurs one period earlier than the ordinary case.", given: ["PVordinary = $7,863 (from the ordinary-annuity example above)", "r = 0.04"], worked: "PVdue = 7,863 \u00D7 1.04\nPVdue \u2248 $8,177\n\n(about $314 more than the ordinary version,\njust from receiving each payment one period sooner)", workedExhibit: EXHIBIT_WORKED_ANNUITY_PV },
        ],
      },
      {
        id: "tvm-5",
        title: "Perpetuities",
        body: [
          `A perpetuity is an annuity that never ends — the same equal-payment idea as an ordinary annuity, just with no final period. A growing perpetuity adds one twist: each payment is a constant percentage larger than the one before, forever.`,
          `Why does the growing perpetuity formula need r > g? Every payment is being pulled in two directions at once: discounting shrinks it (it's further in the future), while growth enlarges it (it's a bigger dollar amount than the payment before). If g is smaller than r, discounting wins every time, so each term gets a little smaller than the last — and an infinite list of shrinking numbers can still add up to one finite total. If g were equal to or larger than r, growth would win instead, and adding infinitely many same-or-larger terms would never settle on any number at all.`,
          `One easy mistake: the perpetuity formula values the stream one period before the first payment — not necessarily today, if the first payment is delayed further out.`,
          `(You'll meet this same growing-payment idea again when valuing dividend-paying stocks later on — nothing to worry about now, just a shape you'll recognize.)`,
        ],
        exhibits: [{ afterParagraph: 3, svg: EXHIBIT_PERPETUITY }],
        formulas: [
          { id: "tvm-5-perp", name: "PV of a level perpetuity", expression: "PV = <span class=\"frac\"><span class=\"num\">PMT</span><span class=\"den\">r</span></span>", when: "Wording cue: \"forever,\" \"perpetual,\" \"in perpetuity,\" level payment.", given: ["PMT = $6", "r = 0.09"], worked: "PV = 6 / 0.09\nPV \u2248 $66.67", workedExhibit: EXHIBIT_WORKED_PERPETUITY_LEVEL },
          { id: "tvm-5-gperp", name: "PV of a growing perpetuity — advanced", expression: "PV = <span class=\"frac\"><span class=\"num\">PMT1</span><span class=\"den\">r \u2212 g</span></span>, requires r > g", when: "Same as above, but the payment grows at a constant rate each period.", given: ["PMT1 = $6", "r = 0.09", "g = 0.03"], worked: "PV = 6 / (0.09 \u2212 0.03)\nPV = 6 / 0.06\nPV = $100\n\n(notably higher than the level version, since a\ngrowing stream is worth more at the same starting amount)", workedExhibit: EXHIBIT_WORKED_PERPETUITY_GROWING },
        ],
      },
      {
        id: "tvm-6",
        title: "Uneven cash flow series",
        body: [
          `When payments differ period to period, there's no shortcut formula — discount each cash flow back to today individually, then sum. This same technique, applied to a project's inflows minus its initial outlay, becomes the NPV calculation in corporate finance later on.`,
        ],
        exhibits: [{ afterParagraph: 0, svg: EXHIBIT_UNEVEN }],
        formulas: [
          { id: "tvm-6-uneven", name: "PV of an uneven cash flow series — advanced", expression: "PV = \u03A3 <span class=\"frac\"><span class=\"num\">CFt</span><span class=\"den\">(1+r)<sup>t</sup></span></span> for t = 1 to n", when: "Wording cue: a list of different cash flow amounts by year, rather than one repeated payment.", given: ["CF1 = $2,000", "CF2 = $3,500", "CF3 = $1,000", "r = 0.06"], worked: "PV = 2,000/(1.06)<sup>1</sup> + 3,500/(1.06)<sup>2</sup> + 1,000/(1.06)<sup>3</sup>\nPV \u2248 1,887 + 3,115 + 840\nPV \u2248 $5,842", workedExhibit: EXHIBIT_WORKED_UNEVEN },
        ],
      },
      {
        id: "tvm-6b",
        title: "Cash flow additivity and implied forward rates",
        body: [
          `The cash flow additivity principle is a simple but powerful idea: the present value of a series of cash flows equals the sum of the present values of each individual cash flow — which is exactly what the uneven cash flow formula above already does. The reason this gets a name of its own is what it implies: if two different combinations of cash flows produce identical payoffs at identical times, they must be worth exactly the same amount today. If they weren't, you could buy the cheaper combination, sell the more expensive one, and pocket a riskless profit — a condition called arbitrage. Financial markets are assumed not to allow this kind of free money to persist, which is why this is often called the no-arbitrage principle.`,
          `One direct application: if you know the spot rate (today's rate for a loan starting now) for two different maturities, you can back out the implied forward rate — the rate the market is effectively predicting for a future period — because a 2-year investment must earn the same total return whether you invest for 2 years directly, or invest for 1 year and then reinvest for a second year at whatever rate the market implies for that second year.`,
        ],
        formulas: [
          { id: "tvm-6b-forward", name: "Implied forward rate (1-year rate, 1 year from now)", expression: "(1 + S1) \u00D7 (1 + 1y1y forward) = (1 + S2)<sup>2</sup>", when: "Finding the rate the market implicitly expects for a future period, given two spot rates of different maturities.", given: ["S1 = 0.04 (1-year spot rate)", "S2 = 0.05 (2-year spot rate)"], worked: "(1.04) \u00D7 (1 + forward) = (1.05)<sup>2</sup>\n(1.04) \u00D7 (1 + forward) = 1.1025\n1 + forward = 1.1025 / 1.04\nforward \u2248 6.01%\n\n(the market implicitly predicts 1-year rates rise\nfrom 4% to about 6% one year from now)" },
        ],
      },
      {
        id: "tvm-7",
        title: "Formula decision guide",
        type: "decision-guide",
        body: [`Find the phrase that matches the question, then go to the matching formula.`],
        decisionRows: [
          { cue: "\"Invest/deposit a single amount today... worth at a future date\"", formula: "Single sum, future value", section: "tvm-3" },
          { cue: "\"Receive a single amount in the future... worth today\"", formula: "Single sum, present value", section: "tvm-3" },
          { cue: "Equal payments, no timing stated, or \"end of each period\"", formula: "Ordinary annuity", section: "tvm-4" },
          { cue: "Equal payments... \"at the beginning of each period\"", formula: "Annuity due", section: "tvm-4" },
          { cue: "\"Continues forever,\" level payment", formula: "Perpetuity", section: "tvm-5" },
          { cue: "\"Continues forever\" and \"grows at a constant rate\"", formula: "Growing perpetuity", section: "tvm-5" },
          { cue: "A different payment amount listed for each period", formula: "Uneven cash flow series", section: "tvm-6" },
          { cue: "Two spot rates given, asked for the rate implied for a future period", formula: "Implied forward rate", section: "tvm-6b" },
          { cue: "Compounding frequency ≠ quoted rate, or comparing two rates", formula: "Effective annual rate", section: "tvm-2" },
        ],
        formulas: [],
      },
      {
        id: "tvm-8",
        title: "Common traps",
        type: "reference",
        body: [`These four mistakes account for a disproportionate share of missed TVM points.`],
        referenceRows: [
          { item: "Rate/period mismatch", detail: "Monthly payments with an annual rate → convert the rate to monthly and n to months first." },
          { item: "\"Beginning of the year\" ambiguity", detail: "Sometimes describes when a series starts, not each payment's timing. Check whether every payment lands at period-start (due) or period-end (ordinary)." },
          { item: "Sign convention drift", detail: "PV and FV/PMT need opposite signs. Wrong-sign answers usually trace back here." },
          { item: "Off-by-one on perpetuities", detail: "Values one period before the first payment. If the first payment is delayed, discount that lump sum back the extra periods." },
        ],
        formulas: [],
      },
      {
        id: "tvm-9",
        title: "Addendum: Interactive Formula Mind Map",
        body: [
          `Every formula in this chapter is a variation of the same core relationship. The interactive map below organizes them by which variable a question is really asking about — solving for present value, future value, the rate itself, or a payment/number of periods — plus how the rate gets defined and how payment frequency changes the setup. This is meant as a review tool, not new material: work through the chapter normally first, then use this to test whether you can match a word problem to the right formula at a glance.`,
          `Click any box below to see a full worked word problem for that specific variation.`,
        ],
        interactiveExhibit: "tvmMindmap",
        formulas: [],
      },
    ],
  },
  {
    id: "probstat",
    number: "03",
    title: "Probability & Statistics",
    subtitle: "Quantitative Methods: the tools that describe risk, return, and uncertainty",
    sections: [
      {
        id: "probstat-1",
        title: "Overview",
        body: [
          `Quantitative Methods has two halves. Chapter 02 covered time value of money. This chapter covers the other half: how to describe and reason about uncertain outcomes.`,
        ],
        formulas: [],
      },
      {
        id: "probstat-2",
        title: "Core probability concepts",
        body: [
          `A random variable is any quantity whose outcome isn't known in advance — next year's stock return, whether a bond defaults, tomorrow's GDP growth rate. Probability measures how likely a particular outcome is, expressed as a number between 0 (impossible) and 1 (certain).`,
          `Two events are mutually exclusive if they can't both happen. Two events are independent if one happening tells you nothing about whether the other happens.`,
          `The addition rule finds the probability that either of two events happens. If mutually exclusive, just add their probabilities; otherwise subtract the overlap once, or you'll double-count it.`,
          `Conditional probability asks: given that one thing has already happened, what's the probability of another? The multiplication rule finds the probability that both of two events happen — if independent, this simplifies to just multiplying the two probabilities together.`,
          `Expected value is the probability-weighted average of all possible outcomes — the average you'd expect if you repeated the situation many times.`,
        ],
        formulas: [
          { id: "probstat-2-addition", name: "Addition rule (general)", expression: "P(A or B) = P(A) + P(B) \u2212 P(A and B)", when: "Finding the probability that either of two events happens.", given: ["P(A) = 0.55 (price rises)", "P(B) = 0.40 (volume rises)", "P(A and B) = 0.25"], worked: "P(A or B) = 0.55 + 0.40 \u2212 0.25\nP(A or B) = 0.70" },
          { id: "probstat-2-mult", name: "Multiplication rule", expression: "P(A and B) = P(A) \u00D7 P(B | A)", when: "Finding the probability that both of two events happen. If independent, simplifies to P(A) \u00D7 P(B).", given: ["P(A) = 0.30 (beats market this year)", "P(B) = 0.30 (beats market next year, independent)"], worked: "P(A and B) = 0.30 \u00D7 0.30\nP(A and B) = 0.09, or 9%" },
          { id: "probstat-2-ev", name: "Expected value", expression: "E(X) = \u03A3 [ P(outcome) \u00D7 value of outcome ]", when: "Finding the probability-weighted average outcome.", given: ["P(pays $1,000) = 0.90", "P(defaults, pays $400) = 0.10"], worked: "E(X) = (0.90 \u00D7 1,000) + (0.10 \u00D7 400)\nE(X) = 900 + 40\nE(X) = $940" },
        ],
      },
      {
        id: "probstat-3",
        title: "Measures of central tendency and dispersion",
        body: [
          `Central tendency describes the "typical" value in a data set. The mean is the arithmetic average; the median is the middle value when data is sorted, useful when a few extreme outliers would distort the mean; the mode is the most frequently occurring value.`,
          `Dispersion describes how spread out the data is around that typical value. Variance is the average of the squared differences from the mean. Standard deviation is the square root of variance, bringing the units back to the original scale — the most common measure of risk in investments.`,
          `Covariance and correlation describe how two variables move together. Correlation rescales covariance to always fall between −1 and +1. A correlation near +1 means the two variables move together closely; near −1 means they move in opposite directions; near 0 means little linear relationship. This number becomes the backbone of diversification arguments in Portfolio Management.`,
        ],
        formulas: [
          { id: "probstat-3-var", name: "Sample variance and standard deviation", expression: "s\u00B2 = \u03A3(xi \u2212 mean)\u00B2 / (n \u2212 1)\ns = \u221As\u00B2", when: "Measuring how spread out a data set is.", given: ["Returns: 10%, 14%, 6%, 10%", "n = 4", "mean = 10%"], worked: "Squared deviations: 0, 16, 16, 0\nVariance = (0+16+16+0) / (4\u22121)\nVariance \u2248 10.67\nStd dev = \u221A10.67 \u2248 3.27%" },
          { id: "probstat-3-corr", name: "Correlation", expression: "Correlation(X,Y) = <span class=\"frac\"><span class=\"num\">Covariance(X,Y)</span><span class=\"den\">StdDev(X) \u00D7 StdDev(Y)</span></span>", when: "Measuring how strongly, and in what direction, two variables move together." },
        ],
      },
      {
        id: "probstat-4",
        title: "Probability distributions",
        body: [
          `A probability distribution describes every possible outcome of a random variable and how likely each one is. The most important distribution in investments is the normal distribution — the familiar symmetric bell curve, fully described by just its mean and standard deviation.`,
          `Skewness describes asymmetry — a long tail to the right is positively skewed; a long tail to the left is negatively skewed. Kurtosis describes how "fat" the tails are compared to a normal distribution — fat tails mean extreme outcomes happen more often than a normal distribution would predict.`,
        ],
        formulas: [],
      },
      {
        id: "probstat-5",
        title: "Hypothesis testing, in plain terms",
        body: [
          `Hypothesis testing is a formal procedure for deciding whether evidence from a sample is strong enough to challenge an assumed claim about a population. You start by stating a null hypothesis (the default assumption) and an alternative hypothesis (what you'd conclude if the evidence contradicts the null).`,
          `You then pick a significance level (commonly 5%) — the probability of wrongly rejecting a true null hypothesis that you're willing to accept. A Type I error rejects a null hypothesis that was actually true (a "false alarm"); a Type II error fails to reject a null hypothesis that was actually false (a "missed signal"). Making it harder to commit one type of error usually makes the other more likely.`,
          `Worked example: a researcher tests whether a new trading strategy's average return differs from zero. Null hypothesis: the true average return is zero. If the sample data would be very unusual under that assumption, the researcher rejects the null and concludes the strategy's return is likely different from zero.`,
        ],
        formulas: [],
      },
      {
        id: "probstat-5b",
        title: "Semi-deviation and the coefficient of variation",
        body: [
          `Standard deviation treats upside and downside swings identically — but investors usually only really worry about the downside. Semi-deviation addresses this by measuring dispersion using only the returns that fall below the mean (or below some other target), ignoring how much the good outcomes varied.`,
          `The coefficient of variation rescales standard deviation by the mean, turning "risk per unit of return" into a single comparable number — useful when comparing the relative riskiness of two investments with very different average returns, where comparing raw standard deviations alone would be misleading.`,
        ],
        formulas: [
          { id: "probstat-5b-cov", name: "Coefficient of variation", expression: "CV = <span class=\"frac\"><span class=\"num\">Standard deviation</span><span class=\"den\">Mean</span></span>", when: "Comparing relative risk (risk per unit of return) across investments with different average returns.", given: ["Investment A: mean = 8%, std dev = 12%", "Investment B: mean = 20%, std dev = 18%"], worked: "CV(A) = 12 / 8 = 1.5\nCV(B) = 18 / 20 = 0.9\n\n(B has higher absolute risk but a lower CV \u2014\nless risk per unit of expected return than A)" },
        ],
      },
      {
        id: "probstat-5c",
        title: "Conditional expectations and Bayes' formula",
        body: [
          `An unconditional expectation is the expected value of a random variable with no extra information — the plain expected value formula from earlier in this chapter. A conditional expectation updates that expectation once you know something else has happened — "given that the economy is in recession, what's the expected return on this stock?" is a conditional expectation.`,
          `Bayes' formula is the formal tool for updating a probability once new evidence arrives — starting from a prior probability (your belief before the new information) and combining it with how likely that evidence would be under different scenarios, to arrive at a posterior probability (your updated belief after the new information).`,
        ],
        formulas: [
          { id: "probstat-5c-bayes", name: "Bayes' formula", expression: "P(Event | Info) = <span class=\"frac\"><span class=\"num\">P(Info | Event) \u00D7 P(Event)</span><span class=\"den\">P(Info)</span></span>", when: "Updating a probability once new information arrives.", given: ["P(Event) = 0.30 (prior: beats benchmark)", "P(Info | Event) = 0.20 (large cash position, given it beat benchmark)", "P(Info | not Event) = 0.50 (large cash position, given it did not)", "P(not Event) = 0.70"], worked: "P(Info) = (0.20\u00D70.30) + (0.50\u00D70.70)\nP(Info) = 0.06 + 0.35 = 0.41\n\nP(Event | Info) = (0.20 \u00D7 0.30) / 0.41\nP(Event | Info) \u2248 14.6%\n\n(well below the 30% prior \u2014 a large cash position\nis more typical of years the fund underperforms)" },
        ],
      },
      {
        id: "probstat-5d",
        title: "Sampling, the central limit theorem, and confidence intervals",
        body: [
          `You almost never have data on an entire population — you work with a sample and try to draw reliable conclusions about the whole population from it. The central limit theorem is what makes this possible: it states that as sample size grows large, the distribution of the sample mean approaches a normal distribution, regardless of the shape of the underlying population's distribution. This is what lets analysts confidently apply normal-distribution-based tools even when the underlying data itself isn't normally distributed.`,
          `A confidence interval uses that idea to give a range, rather than a single point estimate, for an unknown population parameter — for example, "we're 95% confident the true mean return lies between 6% and 10%," rather than just claiming a single number.`,
        ],
        formulas: [
          { id: "probstat-5d-ci", name: "Confidence interval for the mean", expression: "CI = Sample mean \u00B1 (z \u00D7 <span class=\"frac\"><span class=\"num\">Standard deviation</span><span class=\"den\">\u221An</span></span>)", when: "Estimating a range for the true population mean from a sample. z is a constant based on the desired confidence level (about 1.96 for 95% confidence).", given: ["Sample mean = 1.2%", "Std dev = 4%", "n = 100", "z = 1.96 (95% confidence)"], worked: "CI = 1.2% \u00B1 (1.96 \u00D7 4%/\u221A100)\nCI = 1.2% \u00B1 (1.96 \u00D7 0.4%)\nCI = 1.2% \u00B1 0.784%\n\n95% CI: about 0.42% to 1.98%" },
        ],
      },
      {
        id: "probstat-5e",
        title: "Parametric vs. non-parametric tests",
        body: [`Parametric tests (like the hypothesis tests described above) assume the underlying data follows a specific distribution, usually normal, and typically test a parameter of that distribution (like the mean). Non-parametric tests make no such distributional assumption — useful when data is heavily skewed, has extreme outliers, or is based on ranks rather than precise numeric values rather than a clean bell curve. The trade-off: parametric tests are more powerful (better at detecting a real effect) when their assumptions actually hold, but non-parametric tests remain valid when those assumptions are violated.`],
        formulas: [],
      },
      {
        id: "probstat-6",
        title: "Formula decision guide",
        type: "decision-guide",
        body: [`Find the phrase that matches the question, then go to the matching concept.`],
        decisionRows: [
          { cue: "\"Probability that either event happens\"", formula: "Addition rule", section: "probstat-2" },
          { cue: "\"Probability that both events happen\"", formula: "Multiplication rule", section: "probstat-2" },
          { cue: "\"Given that X happened, what's the probability of Y\"", formula: "Conditional probability", section: "probstat-2" },
          { cue: "\"Average outcome across weighted probabilities\"", formula: "Expected value", section: "probstat-2" },
          { cue: "\"How spread out are the returns\"", formula: "Variance / standard deviation", section: "probstat-3" },
          { cue: "\"How do two variables move together\"", formula: "Covariance / correlation", section: "probstat-3" },
          { cue: "\"Is this sample result statistically meaningful\"", formula: "Hypothesis testing", section: "probstat-5" },
          { cue: "\"Risk per unit of return,\" comparing investments with different means", formula: "Coefficient of variation", section: "probstat-5b" },
          { cue: "Only downside variation matters", formula: "Semi-deviation", section: "probstat-5b" },
          { cue: "Updating a probability given new information", formula: "Bayes' formula", section: "probstat-5c" },
          { cue: "A range estimate for the true population mean", formula: "Confidence interval", section: "probstat-5d" },
          { cue: "Data isn't normally distributed / has extreme outliers", formula: "Non-parametric test", section: "probstat-5e" },
        ],
        formulas: [],
      },
      {
        id: "probstat-7",
        title: "Common traps",
        type: "reference",
        body: [`Four mix-ups account for a lot of missed points here.`],
        referenceRows: [
          { item: "Independent vs. mutually exclusive", detail: "Mutually exclusive events can't both happen (highly dependent on each other), while independent events don't affect each other's probability at all." },
          { item: "Forgetting to subtract overlap", detail: "Only skip the subtraction in the addition rule if the events are truly mutually exclusive." },
          { item: "Reporting variance instead of standard deviation", detail: "Variance is in squared units; always take the square root for a return-style answer." },
          { item: "Misreading correlation direction", detail: "Correlation of \u22121 means the strongest possible opposite relationship, not \"no relationship.\" Zero means no linear relationship." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "returns",
    number: "04",
    title: "Returns & Benchmarking",
    subtitle: "Quantitative Methods: how to measure, annualize, and compare investment returns",
    sections: [
      {
        id: "returns-1",
        title: "Overview",
        body: [`Before you can discount anything, you need to know what "return" actually means precisely — and it turns out there's more than one right answer, depending on the question being asked. This chapter covers how returns are measured, what makes up a required rate of return, how to compare a portfolio manager's skill fairly, and how market indexes are built.`],
        formulas: [],
      },
      {
        id: "returns-2",
        title: "Types of returns",
        body: [
          `The holding period return (HPR) is the most basic return measure: the total return earned over whatever period you actually held the investment, including both price change and any income received (like dividends or interest).`,
          `From there, several variations matter: a gross return is before fees and expenses; a net return is after them. A pre-tax return ignores taxes; an after-tax return accounts for them. A real return adjusts for inflation, while a nominal return does not — the same distinction from the effective annual rate discussion earlier, just applied to investment performance rather than a borrowing rate. A leveraged return uses borrowed money to amplify a position, which magnifies both gains and losses relative to the unleveraged return.`,
        ],
        formulas: [
          { id: "returns-2-hpr", name: "Holding period return", expression: "HPR = <span class=\"frac\"><span class=\"num\">Ending value \u2212 Beginning value + Income</span><span class=\"den\">Beginning value</span></span>", when: "Measuring the total return earned over a single holding period.", given: ["Beginning value = $50", "Ending value = $54", "Income = $1 (dividend)"], worked: "HPR = (54 \u2212 50 + 1) / 50\nHPR = 5 / 50\nHPR = 10%" },
        ],
      },
      {
        id: "returns-3",
        title: "Required rate of return",
        body: [`The required rate of return an investor demands is built from two pieces: the risk-free rate (the return available on a virtually riskless investment, like a short-term government bill) plus a risk premium (extra return demanded for bearing the additional risk of this specific investment over the risk-free alternative). Inflation is embedded in the risk-free rate itself — a nominal risk-free rate compensates for both the pure time value of money and expected inflation, which is exactly why Chapter 02's real-vs-nominal distinction resurfaces constantly throughout the curriculum.`],
        formulas: [
          { id: "returns-3-required", name: "Required rate of return", expression: "Required return = Risk-free rate + Risk premium", when: "Building up the discount rate used to value a risky investment.", given: ["Risk-free rate = 3%", "Risk premium = 5%"], worked: "Required return = 3% + 5%\nRequired return = 8%" },
        ],
      },
      {
        id: "returns-4",
        title: "Money-weighted vs. time-weighted rate of return",
        body: [
          `When an investor adds or withdraws money partway through a period, two different return measures can tell very different stories — and the exam leans heavily on knowing which one answers which question.`,
          `The money-weighted rate of return (MWRR) is exactly the same idea as IRR from Chapter 06 (Corporate Issuers) — the discount rate that makes the present value of all cash flows (contributions, withdrawals, and the ending value) equal zero. Because it's sensitive to the size and timing of contributions, MWRR reflects the actual dollar-weighted experience of that specific investor.`,
          `The time-weighted rate of return (TWRR) breaks the overall period into sub-periods around each contribution/withdrawal, calculates the return for each sub-period separately, then geometrically links them together. Because it strips out the effect of when money was added or removed, TWRR isolates the performance of the underlying investments themselves — which is exactly why it's the standard for judging a portfolio manager's skill, regardless of when the manager's clients happened to add or remove cash.`,
          `Worked example: you invest $100, and the portfolio grows 10% in year 1 to $110. You then add $100 more (now $210 invested), and the portfolio falls 10% in year 2, ending at $189. The TWRR treats each year on its own merits: TWRR = [(1.10) \u00D7 (0.90)]<sup>1/2</sup> \u2212 1 = \u221A0.99 \u2212 1 \u2248 \u22120.5% per year \u2014 a modest, symmetric-looking result. The MWRR, however, would come out noticeably lower than this, because the extra $100 contribution happened right before the bad year, meaning more of the investor's actual dollars were exposed to the 10% loss than to the 10% gain. Same investments, same two annual returns \u2014 different investor outcomes, and different numbers for it.`,
        ],
        formulas: [
          { id: "returns-4-twrr", name: "Time-weighted rate of return", expression: "TWRR = [(1+r1) \u00D7 (1+r2) \u00D7 ... \u00D7 (1+rn)]<sup>1/n</sup> \u2212 1", when: "Measuring investment performance independent of the timing/size of external cash flows — the standard for evaluating manager skill." },
        ],
      },
      {
        id: "returns-5",
        title: "Benchmarking with market indexes",
        body: [
          `A market index tracks the combined performance of a specified basket of securities, giving a shorthand for "how a market or segment is doing." How an index weights its constituent securities meaningfully changes what it measures and how it behaves.`,
          `A price-weighted index (like the Dow Jones Industrial Average) simply averages the prices of its constituent stocks — meaning a $200 stock influences the index eight times as much as a $25 stock, regardless of the actual size of either company. A market-capitalization-weighted index (like the S&P 500) weights each constituent by its total market value (share price × shares outstanding), so larger companies drive more of the index's movement — generally considered more representative of the actual market's aggregate behavior. An equal-weighted index gives every constituent the same weight regardless of price or size, which tilts more toward smaller companies than either of the other two methods.`,
        ],
        formulas: [],
      },
      {
        id: "returns-6",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the question to the concept.`],
        decisionRows: [
          { cue: "Total return earned over one holding period, including income", formula: "Holding period return (HPR)", section: "returns-2" },
          { cue: "Building a discount rate from a risk-free rate plus compensation for risk", formula: "Required rate of return", section: "returns-3" },
          { cue: "Evaluating a manager's skill, independent of client cash flow timing", formula: "Time-weighted rate of return (TWRR)", section: "returns-4" },
          { cue: "Reflecting a specific investor's actual dollar-weighted experience", formula: "Money-weighted rate of return (MWRR)", section: "returns-4" },
          { cue: "A larger stock's price move affects the index more than a smaller stock's", formula: "Price-weighted index", section: "returns-5" },
          { cue: "A larger company's total market value affects the index more", formula: "Market-cap-weighted index", section: "returns-5" },
        ],
        formulas: [],
      },
      {
        id: "returns-7",
        title: "Common traps",
        type: "reference",
        body: [`Watch for these.`],
        referenceRows: [
          { item: "Confusing MWRR and TWRR", detail: "MWRR is sensitive to contribution timing (actual investor experience); TWRR strips that out (manager skill). A large contribution right before a loss drags MWRR down more than TWRR." },
          { item: "Assuming index weighting doesn't matter", detail: "The same set of stocks can produce meaningfully different index returns depending on price-weighted vs. cap-weighted vs. equal-weighted construction." },
          { item: "Forgetting income in HPR", detail: "Holding period return includes dividends/interest received, not just the price change." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "simulation",
    number: "05",
    title: "Simulation Methods",
    subtitle: "Quantitative Methods: modeling uncertain outcomes when no clean formula exists",
    sections: [
      {
        id: "sim-1",
        title: "Overview",
        body: [`Not every problem in finance has a tidy closed-form formula — sometimes the honest answer to "what might happen?" requires generating many possible outcomes and studying the resulting pattern. This chapter covers three ways analysts do that.`],
        formulas: [],
      },
      {
        id: "sim-2",
        title: "Historical simulation",
        body: [`Historical simulation reuses actual past data as the basis for simulating future outcomes — for example, taking the last 5 years of daily stock returns and treating each of those historical days as one equally likely possible outcome for tomorrow. Its strength is realism: it captures whatever real correlations, fat tails, and quirks actually occurred historically, without having to guess at a distribution. Its weakness is the same thing viewed the other way — it assumes the future will resemble the specific historical period sampled, which may not hold.`],
        formulas: [],
      },
      {
        id: "sim-3",
        title: "Bootstrap resampling",
        body: [`Bootstrap resampling repeatedly draws random samples from an existing data set, with replacement (meaning the same historical observation can be picked more than once in a given resample), to build up a picture of how uncertain a statistic (like a mean or a standard deviation) really is. Rather than assuming a formula for that uncertainty, the bootstrap approach empirically generates it by resampling the actual data over and over and seeing how much the resulting statistic bounces around.`],
        formulas: [],
      },
      {
        id: "sim-4",
        title: "Monte Carlo simulation",
        body: [`Monte Carlo simulation takes a different approach: rather than reusing historical data directly, it generates a large number of random scenarios by drawing from an assumed probability distribution (commonly a normal or lognormal distribution for asset prices), then studies the resulting range of outcomes. This is especially useful for modeling something like a retirement portfolio's terminal value across thousands of simulated market paths, where no simple formula could capture the combined effect of ongoing contributions, withdrawals, and random market returns all at once.`],
        formulas: [],
      },
      {
        id: "sim-5",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the description to the method.`],
        decisionRows: [
          { cue: "Reusing actual historical data points as the simulated outcomes", formula: "Historical simulation", section: "sim-2" },
          { cue: "Repeatedly resampling existing data, with replacement, to gauge uncertainty in a statistic", formula: "Bootstrap resampling", section: "sim-3" },
          { cue: "Generating many random scenarios from an assumed distribution", formula: "Monte Carlo simulation", section: "sim-4" },
        ],
        formulas: [],
      },
      {
        id: "sim-6",
        title: "Common traps",
        type: "reference",
        body: [`Watch for these.`],
        referenceRows: [
          { item: "Assuming historical simulation predicts the future", detail: "It assumes the future resembles the sampled historical period — a real limitation, not a guarantee." },
          { item: "Confusing bootstrap resampling with simply repeating the original data set", detail: "Bootstrap resampling draws random samples with replacement — the same data point can appear multiple times or not at all in a given resample." },
          { item: "Assuming Monte Carlo results are exact", detail: "Results depend entirely on the assumed distribution and its parameters — a flawed assumption produces a flawed simulation, however sophisticated it looks." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "regression",
    number: "06",
    title: "Simple Linear Regression",
    subtitle: "Quantitative Methods: quantifying the relationship between two variables",
    sections: [
      {
        id: "reg-1",
        title: "Overview",
        body: [`Simple linear regression finds the straight line that best describes how one variable (the dependent variable) tends to move in response to another (the independent variable) — the statistical backbone behind estimating a stock's beta, one of the most important numbers you'll meet in Portfolio Management.`],
        formulas: [],
      },
      {
        id: "reg-2",
        title: "The regression model and the least squares criterion",
        body: [
          `A simple linear regression model says: Y = b0 + b1X + error, where b0 (the intercept) is the model's predicted value of Y when X is zero, and b1 (the slope) is how much Y is predicted to change for each one-unit change in X.`,
          `The least squares criterion is how the "best" line is actually chosen: out of every possible line you could draw through a scatter of data points, least squares picks the one that minimizes the sum of the squared vertical distances between each actual data point and the line — squaring ensures points above and below the line don't cancel out, and penalizes large misses more heavily than small ones.`,
        ],
        formulas: [
          { id: "reg-2-slope", name: "Regression slope (b1)", expression: "b1 = <span class=\"frac\"><span class=\"num\">Covariance(X,Y)</span><span class=\"den\">Variance(X)</span></span>", when: "Estimating how much Y changes, on average, for a one-unit change in X — this is exactly how a stock's beta is calculated.", given: ["Covariance(stock, market) = 0.008", "Variance(market) = 0.005"], worked: "b1 = 0.008 / 0.005\nb1 = 1.6\n\n(this beta plugs directly into the CAPM\nformula you'll see in Portfolio Management)" },
        ],
      },
      {
        id: "reg-3",
        title: "Assessing the fit: R\u00B2 and standard error",
        body: [
          `Not every regression line fits its data equally well. R\u00B2 (the coefficient of determination) measures the proportion of the variation in Y that's explained by the model's relationship with X, ranging from 0 (the model explains none of the variation) to 1 (it explains all of it). The standard error of estimate measures the typical size of the model's prediction errors, in the same units as Y itself — a smaller standard error means predictions cluster more tightly around the fitted line.`,
        ],
        formulas: [
          { id: "reg-3-r2", name: "R\u00B2 (coefficient of determination)", expression: "R\u00B2 = <span class=\"frac\"><span class=\"num\">Explained variation</span><span class=\"den\">Total variation</span></span>", when: "Measuring how much of Y's variation the regression model actually explains.", given: ["R\u00B2 = 0.36 (from a stock-vs-market regression)"], worked: "36% of the stock's return variation is explained\nby the market.\n\nThe remaining 64% is due to factors specific\nto that stock, unrelated to the broad market." },
        ],
      },
      {
        id: "reg-4",
        title: "Predictions, prediction intervals, and functional form",
        body: [`Once a regression line is fitted, plugging in a new X value gives a predicted value of Y — but that single predicted number is a best estimate, not a certainty. A prediction interval gives a range around that predicted value, reflecting the model's typical error, the same conceptual idea as the confidence interval from the Probability & Statistics chapter, just applied to a regression prediction rather than a sample mean. Not every relationship is a straight line either — some financial relationships fit better using a different functional form (like a logarithmic or quadratic relationship) than a simple straight line, something regression diagnostics can help reveal.`],
        formulas: [],
      },
      {
        id: "reg-5",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the question to the concept.`],
        decisionRows: [
          { cue: "How much Y changes per one-unit change in X (e.g., a stock's beta)", formula: "Regression slope (b1)", section: "reg-2" },
          { cue: "How much of Y's variation the model explains", formula: "R\u00B2", section: "reg-3" },
          { cue: "The typical size of the model's prediction errors", formula: "Standard error of estimate", section: "reg-3" },
          { cue: "A range estimate around a single predicted value", formula: "Prediction interval", section: "reg-4" },
        ],
        formulas: [],
      },
      {
        id: "reg-6",
        title: "Common traps",
        type: "reference",
        body: [`Watch for these.`],
        referenceRows: [
          { item: "Confusing correlation with the regression slope", detail: "Correlation is always between \u22121 and +1; the regression slope (beta) can be any number, and depends on the variance of X." },
          { item: "Assuming a high R\u00B2 means the model is \"correct\"", detail: "A high R\u00B2 shows a strong statistical fit within the sample — it doesn't prove the relationship is causal or will hold going forward." },
          { item: "Forcing a straight line onto a clearly non-linear relationship", detail: "Some relationships are better described by a different functional form entirely." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "datascience",
    number: "07",
    title: "Introduction to Financial Data Science",
    subtitle: "Quantitative Methods: how big data, machine learning, and AI are changing investment analysis",
    sections: [
      {
        id: "ds-1",
        title: "Overview",
        body: [`Modern investment analysis increasingly draws on data and techniques that go well beyond the traditional financial statements and market prices covered elsewhere in this course. This short chapter introduces the vocabulary, kept deliberately light on math — the goal here is fluency with the concepts, not calculation.`],
        formulas: [],
      },
      {
        id: "ds-2",
        title: "Big data and alternative data",
        body: [`Big data refers to data sets too large, fast-moving, or unstructured for traditional analysis tools to handle easily. In investing, this increasingly includes alternative data — information not found in traditional financial statements or market prices, like satellite imagery of retailer parking lots (used to estimate sales before earnings are reported), credit card transaction data, or social media sentiment. Structured data fits neatly into rows and columns (like a spreadsheet of financial ratios); unstructured data does not (like the text of a news article or an earnings call transcript), and typically requires more specialized techniques to analyze.`],
        formulas: [],
      },
      {
        id: "ds-3",
        title: "Machine learning and artificial intelligence in investing",
        body: [`Machine learning refers to computer systems that improve their performance on a task by learning patterns from data, rather than following only explicitly programmed rules. Two broad categories come up often: supervised learning trains a model on data where the "correct answer" is already known (like predicting default using historical loans that are already labeled as defaulted or not), while unsupervised learning looks for patterns or groupings in data without any pre-labeled correct answer (like clustering stocks into groups with similar behavior, without being told in advance what those groups should be).`],
        formulas: [],
      },
      {
        id: "ds-4",
        title: "Applications in fintech and investment management",
        body: [`These techniques show up across the investment industry in practical ways: robo-advisors use algorithms to build and manage portfolios with minimal human intervention; algorithmic and high-frequency trading use automated rules to execute trades, sometimes within fractions of a second; sentiment analysis applies natural language processing to news, filings, or social media to gauge market mood; and credit scoring and fraud detection increasingly rely on machine learning models trained on large historical data sets.`],
        formulas: [],
      },
      {
        id: "ds-5",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the description to the term.`],
        decisionRows: [
          { cue: "Data too large or unstructured for traditional tools", formula: "Big data", section: "ds-2" },
          { cue: "Information outside traditional financial statements/prices (satellite images, transaction data)", formula: "Alternative data", section: "ds-2" },
          { cue: "A model trained on data with known correct answers", formula: "Supervised learning", section: "ds-3" },
          { cue: "A model finding patterns without pre-labeled correct answers", formula: "Unsupervised learning", section: "ds-3" },
          { cue: "Automated portfolio construction/management with minimal human input", formula: "Robo-advisors", section: "ds-4" },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "econ",
    number: "08",
    title: "Economics",
    subtitle: "How markets, money, and policy shape the environment every investment sits inside",
    sections: [
      {
        id: "econ-1",
        title: "Overview",
        body: [`Economics on Level 1 is less about memorizing theory and more about recognizing how forces like supply, demand, interest rates, and policy decisions ripple into asset prices and company performance. This chapter builds the vocabulary you'll see referenced casually in every other topic area.`],
        formulas: [],
      },
      {
        id: "econ-2",
        title: "Demand, supply, and equilibrium",
        body: [
          `Demand describes how much of a good buyers want to purchase at each possible price — generally, the lower the price, the more people want to buy. Supply describes how much sellers are willing to offer at each price — generally, the higher the price, the more sellers want to sell. The equilibrium price is where the demand and supply curves cross.`,
          `If price sits above equilibrium, a surplus results, pushing price back down. If price sits below equilibrium, a shortage results, pushing price back up.`,
        ],
        formulas: [],
      },
      {
        id: "econ-3",
        title: "Elasticity",
        body: [
          `Elasticity measures how sensitive quantity is to a change in price. Demand is elastic if a small price increase causes a large drop in quantity purchased. Demand is inelastic if quantity barely changes even with a large price increase.`,
        ],
        formulas: [
          { id: "econ-3-elasticity", name: "Price elasticity of demand", expression: "Elasticity = <span class=\"frac\"><span class=\"num\">% change in quantity demanded</span><span class=\"den\">% change in price</span></span>", when: "Measuring how sensitive demand is to a price change.", given: ["% change in price = +10%", "% change in quantity = \u221225%"], worked: "Elasticity = \u221225% / 10%\nElasticity = \u22122.5 (elastic)" },
        ],
      },
      {
        id: "econ-4",
        title: "Market structures",
        body: [
          `Perfect competition: many small sellers, identical products, no single seller can influence price (e.g., agricultural commodities).`,
          `Monopoly: a single seller with no close substitutes, giving it significant pricing power (e.g., a regional utility).`,
          `Oligopoly: a small number of large sellers, where each one's pricing decisions noticeably affect the others (e.g., commercial aircraft manufacturers).`,
          `Monopolistic competition: many sellers, but each with a somewhat differentiated product, giving a bit of pricing power (e.g., restaurants, clothing brands).`,
        ],
        formulas: [],
      },
      {
        id: "econ-5",
        title: "GDP, economic growth, and business cycles",
        body: [
          `Gross domestic product (GDP) measures the total value of goods and services produced within a country over a period. Real GDP adjusts for inflation; nominal GDP does not, and can overstate growth during inflationary periods.`,
          `Economies move through a repeating pattern called the business cycle: expansion, peak, contraction (recession), and trough, before expansion resumes.`,
        ],
        formulas: [],
      },
      {
        id: "econ-6",
        title: "Monetary and fiscal policy",
        body: [
          `Monetary policy is controlled by a central bank (e.g., the Federal Reserve) and primarily works through interest rates and the money supply. Lowering rates tends to stimulate borrowing and spending (expansionary); raising rates tends to cool an overheating economy (contractionary).`,
          `Fiscal policy is controlled by a government through spending and taxation. Increased spending or reduced taxes tends to stimulate the economy (expansionary); reduced spending or higher taxes tends to slow it (contractionary).`,
        ],
        formulas: [],
      },
      {
        id: "econ-7",
        title: "Inflation",
        body: [`Inflation is a sustained rise in the general price level over time, most commonly measured by the Consumer Price Index (CPI). Moderate, predictable inflation is generally considered healthy; high or unpredictable inflation erodes purchasing power — exactly why the effective annual rate and real-vs-nominal-rate distinctions from Chapter 02 matter in practice.`],
        formulas: [],
      },
      {
        id: "econ-8",
        title: "Exchange rates and international trade",
        body: [`An exchange rate is the price of one currency in terms of another. When a currency appreciates, goods become more expensive for foreign buyers (can hurt exports); when it depreciates, goods become cheaper abroad (can help exports). Countries trade because of comparative advantage — even if one country produces everything more efficiently, both still gain by specializing in what each produces relatively best.`],
        formulas: [],
      },
      {
        id: "econ-8b",
        title: "Exchange rate calculations",
        body: [
          `Exchange rates are quoted as one currency per unit of another — and a critical habit to build early: always identify which currency is the "price currency" (the amount being quoted) and which is the "base currency" (the one unit you're pricing), since mixing this up is one of the most common, avoidable errors on exam calculations.`,
          `A cross rate lets you find the exchange rate between two currencies when you're only given each currency's rate against a common third currency (very often the US dollar) — multiplying or dividing the two given rates appropriately cancels out the common currency, leaving the direct rate between the two you actually want.`,
          `A forward exchange rate is the rate agreed today for a currency exchange at a future date, and it's linked to today's spot rate through interest rate parity — the same no-arbitrage logic from the implied forward rate discussion in Quantitative Methods, just applied across two currencies instead of two maturities of the same currency. The currency with the higher interest rate will trade at a forward discount (its forward rate is weaker than its spot rate); the currency with the lower interest rate will trade at a forward premium.`,
        ],
        formulas: [
          { id: "econ-8b-cross", name: "Cross rate calculation", expression: "(A/B) = (A/C) \u00D7 (C/B)", when: "Finding the exchange rate between two currencies, given each one's rate against a common third currency.", given: ["EUR/USD = 1.10", "GBP/USD = 1.25"], worked: "EUR/GBP = (EUR/USD) \u00F7 (GBP/USD)\nEUR/GBP = 1.10 / 1.25\nEUR/GBP = 0.88" },
          { id: "econ-8b-forward", name: "Forward premium/discount (interest rate parity, approximate)", expression: "Forward premium/discount \u2248 Domestic interest rate \u2212 Foreign interest rate", when: "Estimating whether a currency should trade at a forward premium or discount, based on the interest rate differential between the two countries.", given: ["US risk-free rate = 5%", "Eurozone risk-free rate = 2%"], worked: "Forward premium (EUR) \u2248 5% \u2212 2%\nForward premium (EUR) \u2248 3%\n\n(the lower-rate currency, EUR, is expected\nto strengthen \u2014 trades at a forward premium)" },
        ],
      },
      {
        id: "econ-8c",
        title: "Capital flows and the FX market",
        body: [`A country's balance of payments tracks all its economic transactions with the rest of the world, split broadly into the current account (trade in goods and services, plus income flows) and the capital/financial account (cross-border investment flows — money moving in and out to buy foreign stocks, bonds, or real assets). These flows interact directly with currency markets: strong capital inflows (foreign investors buying a country's assets) generally increase demand for that country's currency, putting upward pressure on its value, while capital outflows tend to have the opposite effect.`],
        formulas: [],
      },
      {
        id: "econ-8d",
        title: "Introduction to geopolitics",
        body: [`Geopolitical developments — trade disputes, sanctions, regional conflicts, shifts in international alliances — can meaningfully affect economic growth, trade flows, currency values, and market risk premiums, even though they originate outside traditional economic models. Analysts increasingly treat geopolitical risk as its own category worth monitoring directly, alongside the more traditional economic and policy factors covered elsewhere in this chapter, precisely because it doesn't always show up in advance in conventional economic data.`],
        formulas: [],
      },
      {
        id: "econ-9",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the description in the question to the concept below.`],
        decisionRows: [
          { cue: "A small price change causing a big change in quantity", formula: "Elastic demand/supply", section: "econ-3" },
          { cue: "One seller, no substitutes, price-setting power", formula: "Monopoly", section: "econ-4" },
          { cue: "A few large firms whose pricing decisions affect each other", formula: "Oligopoly", section: "econ-4" },
          { cue: "Central bank raising/lowering interest rates", formula: "Monetary policy", section: "econ-6" },
          { cue: "Government changing spending or tax rates", formula: "Fiscal policy", section: "econ-6" },
          { cue: "Sustained rise in the general price level", formula: "Inflation", section: "econ-7" },
          { cue: "A country's currency strengthening or weakening", formula: "Exchange rate appreciation/depreciation", section: "econ-8" },
          { cue: "Given two currencies' rates against a common third currency", formula: "Cross rate calculation", section: "econ-8b" },
          { cue: "Finding a currency's forward premium/discount from interest rates", formula: "Interest rate parity", section: "econ-8b" },
          { cue: "Cross-border investment flows affecting currency demand", formula: "Capital flows and the FX market", section: "econ-8c" },
          { cue: "Trade disputes, sanctions, or conflict affecting markets", formula: "Geopolitical risk", section: "econ-8d" },
        ],
        formulas: [],
      },
      {
        id: "econ-10",
        title: "Common traps",
        type: "reference",
        body: [`These mix-ups come up often.`],
        referenceRows: [
          { item: "Nominal vs. real GDP", detail: "Real GDP strips out inflation; rising nominal GDP with high inflation may mean little real growth." },
          { item: "Monetary vs. fiscal policy", detail: "Monetary policy = central bank; fiscal policy = government — not the same body." },
          { item: "Elasticity as a single fixed number", detail: "Elasticity typically differs at different points on the same demand curve." },
          { item: "Currency appreciation as automatically \"good\"", detail: "It helps importers and travelers but can hurt exporters." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "fsa",
    number: "09",
    title: "Financial Statement Analysis",
    subtitle: "Reading a company's three core statements and turning them into insight",
    sections: [
      {
        id: "fsa-1",
        title: "Overview",
        body: [`Financial statement analysis (FSA) is how you translate a company's raw accounting output into judgments about its financial health, profitability, and risk. This chapter builds the vocabulary and ratio toolkit used constantly in equity and credit analysis later on.`],
        formulas: [],
      },
      {
        id: "fsa-2",
        title: "The three financial statements",
        body: [
          `The income statement reports revenue, expenses, and the resulting profit (or loss) over a period. Think of it as a video of performance over time.`,
          `The balance sheet reports what a company owns (assets), owes (liabilities), and the residual claim of owners (equity) at a single point in time. Think of it as a snapshot.`,
          `The cash flow statement reports actual cash moving in and out, split into operating, investing, and financing activities — since the income statement includes non-cash items like depreciation and doesn't show whether profit actually turned into cash.`,
        ],
        formulas: [
          { id: "fsa-2-equation", name: "The accounting equation", expression: "Assets = Liabilities + Equity", when: "Must always balance — the structural backbone of the balance sheet." },
        ],
      },
      {
        id: "fsa-3",
        title: "Revenue and expense recognition",
        body: [`Under accrual accounting, revenue is recognized when it is earned — not necessarily when cash is received. A company that ships goods on credit records the sale immediately, even though cash arrives later. Expenses are recognized in the same period as the revenue they helped generate (the matching principle).`],
        formulas: [],
      },
      {
        id: "fsa-3b",
        title: "Inventory accounting: FIFO, LIFO, and weighted average",
        body: [
          `When a company sells inventory, it has to decide which of its purchased units it's "selling" for accounting purposes — a real question, since identical units were often bought at different prices over time. Three methods handle this, and the choice meaningfully changes reported profit and balance sheet values, especially when prices are rising or falling.`,
          `FIFO (first-in, first-out) assumes the oldest inventory costs are sold first, leaving the most recently purchased (and, in a rising-price environment, most expensive) costs on the balance sheet as ending inventory. This tends to report higher profit and a more current-looking inventory value during inflation.`,
          `LIFO (last-in, first-out) assumes the newest inventory costs are sold first, leaving the oldest (and, in a rising-price environment, cheapest) costs as ending inventory. This tends to report lower profit — and therefore lower taxes — during inflation, but leaves a stale, understated inventory value on the balance sheet.`,
          `Weighted average blends all purchase costs into a single average cost per unit, landing between FIFO and LIFO for both cost of goods sold and ending inventory value.`,
        ],
        exhibits: [{ afterParagraph: 3, svg: EXHIBIT_INVENTORY_COMPARISON }],
        formulas: [
          { id: "fsa-3b-methods", name: "Cost of goods sold and ending inventory (rising-price example)", expression: "COGS + Ending inventory = Total cost of goods available for sale", when: "The three methods always split the same total cost differently between COGS and ending inventory — they never change the total.", given: ["100 units purchased @ $10", "100 units purchased @ $12", "150 units sold"], worked: "FIFO: COGS = (100\u00D7$10)+(50\u00D7$12) = $1,600\n      Ending inventory = 50\u00D7$12 = $600\n\nLIFO: COGS = (100\u00D7$12)+(50\u00D7$10) = $1,700\n      Ending inventory = 50\u00D7$10 = $500\n\nWeighted avg: avg cost = $2,200/200 = $11/unit\n      COGS = 150\u00D7$11 = $1,650\n      Ending inventory = 50\u00D7$11 = $550" },
        ],
      },
      {
        id: "fsa-3c",
        title: "Long-lived assets and depreciation",
        body: [
          `When a company buys a long-lived asset (equipment, a building, a vehicle), it doesn't expense the full cost immediately — it spreads that cost over the asset's useful life as depreciation, matching the expense to the periods the asset actually helps generate revenue.`,
          `Straight-line depreciation spreads the cost evenly across every year of the asset's useful life — the simplest and most common method.`,
          `Accelerated methods (such as declining balance) front-load more depreciation expense into the early years and less into later years — often used because many assets genuinely lose more of their value/usefulness early on, and because it can reduce taxable income (and therefore taxes owed) sooner.`,
        ],
        exhibits: [{ afterParagraph: 2, svg: EXHIBIT_DEPRECIATION_COMPARISON }],
        formulas: [
          { id: "fsa-3c-sl", name: "Straight-line depreciation", expression: "Annual depreciation = <span class=\"frac\"><span class=\"num\">Cost \u2212 Salvage value</span><span class=\"den\">Useful life</span></span>", when: "Spreading an asset's cost evenly across its useful life.", given: ["Cost = $50,000", "Salvage value = $5,000", "Useful life = 5 years"], worked: "Annual depreciation = (50,000 \u2212 5,000) / 5\nAnnual depreciation = $9,000 every year" },
          { id: "fsa-3c-ddb", name: "Double-declining balance (accelerated) — advanced", expression: "Annual depreciation = 2 \u00D7 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">Useful life</span></span> \u00D7 Beginning book value", when: "Front-loading more depreciation into earlier years.", given: ["Cost = $50,000", "Useful life = 5 years (rate = 2/5 = 40%)"], worked: "Year 1: 50,000 \u00D7 0.40 = $20,000\nYear 2: (50,000\u221220,000) \u00D7 0.40 = $12,000\nYear 3: (30,000\u221212,000) \u00D7 0.40 = $7,200\n\n(declining each year, unlike straight-line's flat $9,000)" },
        ],
      },
      {
        id: "fsa-3d",
        title: "Income taxes: book income vs. taxable income",
        body: [
          `The profit a company reports to shareholders (book income, following GAAP or IFRS) is often different from the profit it reports to tax authorities (taxable income, following tax law) — timing differences like depreciation method choices are a common cause, since a company can legally use straight-line depreciation for its financial statements while using an accelerated method for its tax return.`,
          `When book income and taxable income differ due to timing (rather than permanently), the company records a deferred tax liability (it paid less tax now than its book income would suggest, and will effectively "catch up" later) or a deferred tax asset (the reverse — it paid more tax now and expects a future tax benefit).`,
        ],
        formulas: [
          { id: "fsa-3d-deferred", name: "Deferred tax liability from a timing difference", expression: "Deferred tax liability created = (Tax depreciation \u2212 Book depreciation) \u00D7 Tax rate", when: "Estimating the deferred tax impact of using different depreciation methods for book vs. tax purposes.", given: ["Book depreciation = $9,000", "Tax depreciation = $15,000", "Tax rate = 0.25"], worked: "DTL = (15,000 \u2212 9,000) \u00D7 0.25\nDTL = 6,000 \u00D7 0.25\nDTL = $1,500\n\n(tax the company will effectively pay later, once\ntax depreciation falls below book depreciation)" },
        ],
      },
      {
        id: "fsa-3e",
        title: "Other non-current liabilities: leases and pensions",
        body: [
          `Beyond bonds (covered in Fixed Income), two other non-current liability types show up often on a company's balance sheet.`,
          `Leases: rather than buying an asset outright, a company may lease it instead. Modern accounting rules require most leases to appear on the balance sheet as a lease liability (the obligation to make future payments) alongside a matching right-of-use asset — effectively treating a lease much like a loan used to buy the same asset.`,
          `Pensions: when a company promises employees future retirement benefits, it creates a liability today equal to the present value of that promise — a direct application of the time value of money from Chapter 02. A defined benefit plan promises a specific future payout (putting the funding-shortfall risk on the company); a defined contribution plan only promises to contribute a certain amount today (putting the investment-outcome risk on the employee).`,
        ],
        formulas: [],
      },
      {
        id: "fsa-4",
        title: "Key ratio categories, with worked examples",
        body: [
          `Liquidity ratios ask: can the company meet short-term obligations? Solvency ratios ask: can it meet long-term obligations? Profitability ratios ask: how efficiently does it turn sales into profit? Activity ratios ask: how efficiently does it use its assets?`,
        ],
        formulas: [
          { id: "fsa-4-current", name: "Current ratio (liquidity)", expression: "<span class=\"frac\"><span class=\"num\">Current assets</span><span class=\"den\">Current liabilities</span></span>", when: "Assessing ability to meet short-term obligations.", given: ["Current assets = $500,000", "Current liabilities = $250,000"], worked: "Current ratio = 500,000 / 250,000\nCurrent ratio = 2.0" },
          { id: "fsa-4-de", name: "Debt-to-equity ratio (solvency)", expression: "<span class=\"frac\"><span class=\"num\">Total debt</span><span class=\"den\">Total equity</span></span>", when: "Assessing leverage / ability to meet long-term obligations.", given: ["Total debt = $3,000,000", "Total equity = $2,000,000"], worked: "Debt-to-equity = 3,000,000 / 2,000,000\nDebt-to-equity = 1.5" },
          { id: "fsa-4-margin", name: "Net profit margin (profitability)", expression: "<span class=\"frac\"><span class=\"num\">Net income</span><span class=\"den\">Revenue</span></span>", when: "Assessing how much profit is generated per dollar of sales.", given: ["Net income = $400,000", "Revenue = $5,000,000"], worked: "Net profit margin = 400,000 / 5,000,000\nNet profit margin = 8%" },
          { id: "fsa-4-turnover", name: "Inventory turnover (activity)", expression: "<span class=\"frac\"><span class=\"num\">Cost of goods sold</span><span class=\"den\">Average inventory</span></span>", when: "Assessing how efficiently inventory is used.", given: ["COGS = $2,000,000", "Average inventory = $400,000"], worked: "Inventory turnover = 2,000,000 / 400,000\nInventory turnover = 5 times per year" },
        ],
      },
      {
        id: "fsa-5",
        title: "Quality of earnings — reading between the lines",
        body: [`Not all reported profit is equally trustworthy. A red flag worth watching for: net income that's growing steadily while operating cash flow is flat or declining — this divergence can signal aggressive revenue recognition or other accounting choices that inflate reported profit without a matching increase in actual cash generated.`],
        formulas: [],
      },
      {
        id: "fsa-5b",
        title: "Analysis technique: common-size statements",
        body: [
          `Comparing two companies' raw dollar figures side by side is often misleading if the companies are different sizes — a $6 million cost of goods sold means something very different for a $10 million company than a $100 million one. Common-size statements solve this by expressing every line item as a percentage of a base figure: revenue, for the income statement, or total assets, for the balance sheet.`,
          `This lets you compare cost structure and efficiency across companies of very different sizes, or track how a single company's own structure changes over time, without the raw dollar figures getting in the way.`,
        ],
        exhibits: [{ afterParagraph: 1, svg: EXHIBIT_COMMONSIZE_COMPARISON }],
        formulas: [
          { id: "fsa-5b-commonsize", name: "Common-size income statement line item", expression: "Common-size % = <span class=\"frac\"><span class=\"num\">Line item</span><span class=\"den\">Total revenue</span></span>", when: "Restating an income statement line as a percentage of revenue, to compare companies of different sizes.", given: ["Company A: revenue = $10M, COGS = $6M", "Company B: revenue = $100M, COGS = $65M"], worked: "Company A: COGS % = 6/10 = 60%\nCompany B: COGS % = 65/100 = 65%\n\n(despite being 10x larger, Company B actually runs\na slightly less efficient cost structure)" },
        ],
      },
      {
        id: "fsa-5c",
        title: "DuPont analysis: breaking down return on equity",
        body: [
          `Return on equity (ROE) — net income divided by shareholders' equity — is one of the single most-watched profitability numbers, but on its own it doesn't explain *why* a company's ROE is high or low. DuPont analysis breaks ROE apart into three drivers, each answering a different question: how profitable is each sale (net profit margin), how efficiently are assets used to generate sales (asset turnover), and how much leverage is the company using (the equity multiplier)? Two companies can have identical ROE for completely different reasons — one earning it through genuine operating efficiency, another through aggressive leverage — and DuPont analysis is what reveals the difference.`,
        ],
        formulas: [
          { id: "fsa-5c-dupont", name: "DuPont analysis (3-factor ROE decomposition)", expression: "ROE = <span class=\"frac\"><span class=\"num\">Net income</span><span class=\"den\">Revenue</span></span> \u00D7 <span class=\"frac\"><span class=\"num\">Revenue</span><span class=\"den\">Total assets</span></span> \u00D7 <span class=\"frac\"><span class=\"num\">Total assets</span><span class=\"den\">Total equity</span></span>", when: "Breaking ROE into net profit margin \u00D7 asset turnover \u00D7 the equity multiplier (leverage), to see what's actually driving it.", given: ["Net profit margin = 6%", "Asset turnover = 1.5", "Equity multiplier = 2.0"], worked: "ROE = 6% \u00D7 1.5 \u00D7 2.0\nROE = 18%\n\n(a competitor could reach the same 18% ROE with only\na 4% margin and 1.0 turnover, but a 4.5 multiplier \u2014\nsame headline number, driven mostly by leverage)" },
        ],
      },
      {
        id: "fsa-5d",
        title: "Earnings per share (EPS)",
        body: [
          `Earnings per share restates net income on a per-share basis, making it possible to compare profitability across companies regardless of how many shares each happens to have outstanding. Basic EPS uses only the shares currently outstanding; diluted EPS additionally accounts for securities that could convert into new common shares (like convertible bonds, covered in Fixed Income, or employee stock options), showing what EPS would look like if all of that potential dilution actually happened. Diluted EPS is always less than or equal to basic EPS, since adding potential shares can only spread the same net income more thinly, never less.`,
        ],
        formulas: [
          { id: "fsa-5d-eps", name: "Basic earnings per share", expression: "Basic EPS = <span class=\"frac\"><span class=\"num\">Net income \u2212 Preferred dividends</span><span class=\"den\">Weighted average shares outstanding</span></span>", when: "Preferred dividends are subtracted first because that income belongs to preferred shareholders, not common shareholders.", given: ["Net income = $5,000,000", "Preferred dividends = $500,000", "Weighted avg. shares = 2,000,000"], worked: "Basic EPS = (5,000,000 \u2212 500,000) / 2,000,000\nBasic EPS = 4,500,000 / 2,000,000\nBasic EPS = $2.25 per share" },
        ],
      },
      {
        id: "fsa-5e",
        title: "Free cash flow: FCFF and FCFE",
        body: [
          `Net income and operating cash flow both matter, but neither directly answers the question "how much cash could this company actually distribute to its investors without harming the business?" Free cash flow fills that gap, and comes in two versions depending on which investors you're asking about.`,
          `Free cash flow to the firm (FCFF) is the cash available to all of the company's capital providers — both debt and equity holders — after covering operating expenses and the capital investment needed to sustain the business. Free cash flow to equity (FCFE) narrows that down to just what's available to equity holders specifically, after also accounting for net payments to debtholders.`,
        ],
        formulas: [
          { id: "fsa-5e-fcff", name: "FCFF (starting from net income) — advanced", expression: "FCFF = Net income + Non-cash charges + Interest \u00D7 (1 \u2212 tax rate) \u2212 Capital expenditures \u2212 Increase in working capital", when: "Estimating cash available to all capital providers (debt and equity) combined.", given: ["Net income = $2,000,000", "Non-cash depreciation = $400,000", "Interest expense = $300,000", "Tax rate = 0.25", "CapEx = $600,000", "Increase in working capital = $100,000"], worked: "FCFF = 2,000,000 + 400,000 + 300,000\u00D7(1\u22120.25) \u2212 600,000 \u2212 100,000\nFCFF = 2,000,000 + 400,000 + 225,000 \u2212 600,000 \u2212 100,000\nFCFF = $1,925,000" },
        ],
      },
      {
        id: "fsa-6",
        title: "Formula decision guide",
        type: "decision-guide",
        body: [`Match the question to the concept.`],
        decisionRows: [
          { cue: "Ability to pay short-term bills", formula: "Liquidity ratios (e.g., current ratio)", section: "fsa-4" },
          { cue: "Ability to handle long-term debt", formula: "Solvency ratios (e.g., debt-to-equity)", section: "fsa-4" },
          { cue: "How much profit per dollar of sales", formula: "Profitability ratios (e.g., net profit margin)", section: "fsa-4" },
          { cue: "How efficiently assets/inventory are used", formula: "Activity ratios (e.g., inventory turnover)", section: "fsa-4" },
          { cue: "Whether reported profit is \"real\"", formula: "Compare net income to operating cash flow", section: "fsa-5" },
          { cue: "Breaking ROE down into margin, turnover, and leverage", formula: "DuPont analysis", section: "fsa-5c" },
          { cue: "Profit restated on a per-share basis", formula: "Earnings per share (EPS)", section: "fsa-5d" },
          { cue: "Cash available to all capital providers (debt + equity)", formula: "Free cash flow to the firm (FCFF)", section: "fsa-5e" },
          { cue: "Which inventory costs get expensed first, rising prices, higher reported profit", formula: "FIFO", section: "fsa-3b" },
          { cue: "Which inventory costs get expensed first, rising prices, lower reported profit/taxes", formula: "LIFO", section: "fsa-3b" },
          { cue: "Spreading an asset's cost evenly over its life", formula: "Straight-line depreciation", section: "fsa-3c" },
          { cue: "Front-loading depreciation into early years", formula: "Declining balance (accelerated depreciation)", section: "fsa-3c" },
          { cue: "Book income and taxable income differ due to timing", formula: "Deferred tax asset / liability", section: "fsa-3d" },
          { cue: "Comparing companies of very different sizes", formula: "Common-size statements", section: "fsa-5b" },
        ],
        formulas: [],
      },
      {
        id: "fsa-7",
        title: "Common traps",
        type: "reference",
        body: [`Watch for these.`],
        referenceRows: [
          { item: "Confusing accrual profit with cash", detail: "A profitable company on paper can still run out of cash if receivables pile up faster than they're collected." },
          { item: "Comparing ratios across very different industries", detail: "A \"normal\" ratio varies enormously by industry — always compare to peers." },
          { item: "Ignoring the balance sheet date mismatch", detail: "Using a single point-in-time number instead of an average can distort ratios like inventory turnover." },
          { item: "Assuming LIFO and FIFO differ only in reported profit", detail: "They also leave very different (and non-comparable) inventory values on the balance sheet — LIFO's ending inventory can be badly stale during inflation." },
          { item: "Assuming accelerated depreciation changes total depreciation", detail: "It only changes the timing — total depreciation over the asset's life is identical to straight-line; more expense early means less expense later." },
          { item: "Treating a deferred tax liability as money currently owed", detail: "It reflects a timing difference expected to reverse in the future, not an amount currently payable." },
        ],
        formulas: [],
      },
      {
        id: "fsa-8",
        title: "Addendum: Interactive Formula Mind Map",
        body: [
          `DuPont analysis is the natural center of the FSA ratio toolkit — it's literally built from three of the ratios covered in this chapter (margin, turnover, leverage), so it's a useful anchor for seeing how liquidity, profitability, and per-share metrics all relate. Click any box to see a full worked word problem.`,
        ],
        interactiveExhibit: "fsaMindmap",
        formulas: [],
      },
    ],
  },
  {
    id: "corp",
    number: "10",
    title: "Corporate Issuers",
    subtitle: "How companies decide what to invest in, and how to pay for it",
    sections: [
      {
        id: "corp-1",
        title: "Overview",
        body: [`Corporate issuers covers the financial decisions companies make internally — which projects to fund, how to raise capital, and how to manage day-to-day cash needs. Capital budgeting leans directly on the time value of money tools from Chapter 02.`],
        formulas: [],
      },
      {
        id: "corp-2",
        title: "Corporate structures and governance",
        body: [`Most large companies are organized as corporations, owned by shareholders but run day-to-day by management, with a board of directors overseeing management on shareholders' behalf. Corporate governance refers to the systems and checks meant to keep management's decisions aligned with shareholders' interests.`],
        formulas: [],
      },
      {
        id: "corp-2b",
        title: "Investors and other stakeholders",
        body: [`A corporation answers to more than just its shareholders. Lenders (bondholders and banks) hold a fixed, contractual claim — they're owed a specific amount regardless of how profitable the company becomes, and they're paid before shareholders in almost every circumstance, including bankruptcy. Shareholders hold a residual claim instead — no guaranteed payment, but unlimited upside if the company does well. Beyond these two financial stakeholders, employees, customers, suppliers, and the communities a company operates in all have a stake in its decisions too, and increasingly, environmental and social considerations factor into how companies weigh these different groups' interests against each other.`],
        formulas: [],
      },
      {
        id: "corp-3",
        title: "Capital budgeting: NPV and IRR",
        body: [
          `When a company decides whether to invest in a new project, it estimates the project's future cash flows and discounts them back to today — exactly the uneven cash flow technique from Chapter 02.`,
          `Internal rate of return (IRR) is the discount rate at which a project's NPV would be exactly zero. If a project's IRR exceeds the company's cost of capital, the project is generally attractive.`,
          `Return on invested capital (ROIC) offers a different, backward-looking lens on the same question: rather than evaluating a single proposed project in advance, it measures how efficiently a company has actually used the capital already invested in it — comparing ROIC to the company's cost of capital shows whether its existing investments, in aggregate, have truly been creating value or merely growing the business without necessarily creating value.`,
        ],
        exhibits: [{ afterParagraph: 0, svg: EXHIBIT_WORKED_NPV }],
        formulas: [
          { id: "corp-3-npv", name: "Net present value (NPV)", expression: "NPV = (PV of future cash inflows) \u2212 (initial investment)", when: "Positive NPV = expected to add value; negative NPV = expected to destroy value.", given: ["Initial investment = $50,000", "PMT = $15,000/year", "n = 5", "r = 0.10"], worked: "PV of annuity \u2248 15,000 \u00D7 3.7908 \u2248 $56,862\n\nNPV \u2248 56,862 \u2212 50,000\nNPV \u2248 $6,862 (positive)" },
          { id: "corp-3-roic", name: "Return on invested capital (ROIC)", expression: "ROIC = <span class=\"frac\"><span class=\"num\">Net operating profit after tax</span><span class=\"den\">Invested capital</span></span>", when: "Assessing how efficiently a company's existing capital has been deployed — compare to the cost of capital to judge whether value is being created.", given: ["NOPAT = $18M", "Invested capital = $150M", "Cost of capital = 9% (for comparison)"], worked: "ROIC = 18 / 150\nROIC = 12%\n\n(above the 9% cost of capital \u2014 genuinely\ncreating value with existing capital)" },
        ],
      },
      {
        id: "corp-4",
        title: "Cost of capital",
        body: [`A company's cost of capital is the blended rate of return it must earn to satisfy both its lenders and its shareholders — the minimum bar any new project must clear. This blended figure is commonly called the weighted average cost of capital (WACC).`],
        formulas: [],
      },
      {
        id: "corp-5",
        title: "Capital structure and leverage",
        body: [
          `Capital structure describes the mix of debt and equity a company uses to fund itself. Using more debt (higher leverage) can boost returns to equity holders when things go well, since debt is a fixed cost — but it also amplifies losses and financial risk when things go poorly.`,
          `The Modigliani-Miller propositions are the foundational theory behind this trade-off. In their simplest form (ignoring taxes and other real-world frictions), Modigliani and Miller showed that a company's capital structure shouldn't affect its total value at all — the pie is the same size regardless of how it's sliced between debt and equity. Once taxes are introduced, though, the picture changes: interest payments on debt are typically tax-deductible, creating a genuine tax benefit to using debt (an "interest tax shield") that pure equity financing doesn't offer — which is part of why real companies do usually carry some debt, and why an optimal, or target, capital structure balances that tax benefit against the rising costs of financial distress as leverage increases.`,
        ],
        formulas: [],
      },
      {
        id: "corp-6",
        title: "Working capital management",
        body: [
          `Working capital is the difference between a company's current assets and current liabilities — the cash cushion available for day-to-day operations. Managing it well means collecting receivables promptly, not over-investing in inventory, and timing supplier payments sensibly.`,
          `The cash conversion cycle turns that general idea into a concrete number: the time it takes a company to convert its investments in inventory back into cash. It combines how long inventory sits before being sold, how long it takes to collect cash from customers afterward, and how long the company itself takes to pay its own suppliers — a shorter cash conversion cycle generally means working capital is being managed more efficiently.`,
        ],
        formulas: [
          { id: "corp-6-ccc", name: "Cash conversion cycle", expression: "CCC = Days inventory outstanding + Days sales outstanding \u2212 Days payables outstanding", when: "Measuring how long cash is tied up in the operating cycle before returning as cash from customers.", given: ["Days inventory outstanding = 60", "Days sales outstanding = 45", "Days payables outstanding = 30"], worked: "CCC = 60 + 45 \u2212 30\nCCC = 75 days" },
        ],
      },
      {
        id: "corp-6b",
        title: "Business models",
        body: [`A business model describes, at a fundamental level, how a company creates, delivers, and captures value — what it sells, to whom, and how it actually earns money from that activity. Understanding a company's business model is a necessary first step before any of the deeper valuation or financial analysis covered elsewhere in this course actually makes sense, since the same financial ratio can mean very different things depending on the underlying business generating it (a subscription software company and a capital-intensive manufacturer will naturally look very different on paper, even if both are healthy, well-run businesses).`],
        formulas: [],
      },
      {
        id: "corp-7",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the question to the concept.`],
        decisionRows: [
          { cue: "Whether a project adds value in dollar terms", formula: "NPV", section: "corp-3" },
          { cue: "The project's own break-even rate of return", formula: "IRR", section: "corp-3" },
          { cue: "The minimum return a company must earn overall", formula: "Cost of capital / WACC", section: "corp-4" },
          { cue: "The mix of debt versus equity funding", formula: "Capital structure", section: "corp-5" },
          { cue: "Day-to-day liquidity management", formula: "Working capital", section: "corp-6" },
          { cue: "Comparing a lender's claim to a shareholder's claim", formula: "Investors and other stakeholders", section: "corp-2b" },
          { cue: "How efficiently existing invested capital has been used", formula: "ROIC (vs. cost of capital)", section: "corp-3" },
          { cue: "Whether capital structure itself affects total firm value", formula: "Modigliani-Miller propositions", section: "corp-5" },
          { cue: "How long cash is tied up in the operating cycle", formula: "Cash conversion cycle", section: "corp-6" },
          { cue: "How a company creates, delivers, and captures value", formula: "Business model", section: "corp-6b" },
        ],
        formulas: [],
      },
      {
        id: "corp-8",
        title: "Common traps",
        type: "reference",
        body: [`Watch for these.`],
        referenceRows: [
          { item: "Accepting a project just because IRR is \"high\"", detail: "Always compare IRR to the cost of capital — NPV handles scale trade-offs more directly." },
          { item: "Forgetting leverage cuts both ways", detail: "Debt amplifies both gains and losses to equity holders." },
          { item: "Ignoring the initial investment in NPV", detail: "NPV nets out the upfront cost — never report just the PV of inflows as the answer." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "equity",
    number: "11",
    title: "Equity Investments",
    subtitle: "How stocks are structured, traded, and valued",
    sections: [
      {
        id: "equity-1",
        title: "Overview",
        body: [`This chapter covers what equity securities are, how equity markets are organized, and — most importantly for problem-solving — how to value a share of stock using the same discounting logic from Chapter 02.`],
        formulas: [],
      },
      {
        id: "equity-2",
        title: "Types of equity securities",
        body: [`Common stock represents residual ownership: common shareholders are paid last but typically have voting rights and unlimited upside. Preferred stock typically pays a fixed dividend and is paid before common shareholders, but usually carries no voting rights and limited upside — a hybrid between a bond and common stock.`],
        formulas: [],
      },
      {
        id: "equity-3",
        title: "Market organization and indices",
        body: [
          `Equities trade on organized exchanges (like the NYSE) or over-the-counter networks. A stock market index (like the S&P 500) tracks the combined performance of a specified basket of stocks.`,
          `Buying on margin means borrowing part of a purchase price from a broker, using the securities themselves as collateral — this leverages returns in both directions, exactly like the leveraged return concept from Quantitative Methods. If the position's value falls enough, the broker issues a margin call, requiring the investor to deposit more funds or sell part of the position; the price at which this happens can be calculated directly from the initial margin percentage and the maintenance margin requirement.`,
        ],
        formulas: [
          { id: "equity-3-margin", name: "Margin call price", expression: "Margin call price = Purchase price \u00D7 <span class=\"frac\"><span class=\"num\">1 \u2212 Initial margin</span><span class=\"den\">1 \u2212 Maintenance margin</span></span>", when: "Finding the stock price at which a margin call will be triggered.", given: ["Purchase price = $80", "Initial margin = 0.60", "Maintenance margin = 0.30"], worked: "Margin call price = 80 \u00D7 [(1\u22120.60)/(1\u22120.30)]\nMargin call price = 80 \u00D7 (0.40/0.70)\nMargin call price \u2248 $45.71" },
        ],
      },
      {
        id: "equity-4",
        title: "Equity valuation: the dividend discount model",
        body: [`If a company pays dividends, its shares can be valued using the exact same perpetuity logic from Chapter 02 — a share of stock is just a claim on a stream of future dividends, discounted back to today.`],
        exhibits: [{ afterParagraph: 0, svg: EXHIBIT_WORKED_DDM }],
        formulas: [
          { id: "equity-4-ggm", name: "Gordon growth (constant-growth dividend discount) model", expression: "V0 = <span class=\"frac\"><span class=\"num\">D1</span><span class=\"den\">r \u2212 g</span></span>", when: "Values a stock as a growing perpetuity of dividends.", given: ["D0 = $2.00 (just paid)", "g = 0.04", "r = 0.10"], worked: "D1 = 2.00 \u00D7 1.04 = $2.08\n\nV0 = 2.08 / (0.10 \u2212 0.04)\nV0 \u2248 $34.67" },
        ],
      },
      {
        id: "equity-4b",
        title: "Beyond single-stage: two-stage DDM and FCFE",
        body: [
          `Not every company grows at one constant rate forever — the single-stage Gordon growth model breaks down whenever growth is expected to shift meaningfully, such as a fast-growing young company that's expected to slow to a stable, mature growth rate later on. A two-stage dividend discount model handles this by valuing the high-growth years individually (as an uneven cash flow series, the same technique from Chapter 02), then valuing everything after that as a Gordon growth perpetuity, and finally discounting that terminal value back to today alongside the individual early-year dividends.`,
          `Free cash flow to equity (FCFE), introduced in Financial Statement Analysis, offers an alternative to dividends entirely: instead of discounting what a company actually pays out, you discount what it *could* pay out to equity holders. This matters most for companies that pay small or no dividends despite generating substantial cash — the dividend discount model would undervalue such a company by focusing only on its (small) actual payout, while an FCFE-based valuation captures its true cash-generating capacity.`,
        ],
        formulas: [],
      },
      {
        id: "equity-5",
        title: "Relative valuation: multiples",
        body: [`Rather than discounting cash flows directly, analysts often value a stock by comparing it to similar companies using a multiple — a ratio of price to some fundamental metric.`],
        formulas: [
          { id: "equity-5-pe", name: "Price-to-earnings (P/E) ratio", expression: "<span class=\"frac\"><span class=\"num\">Price per share</span><span class=\"den\">Earnings per share</span></span>", when: "Comparing a stock's price to its earnings, relative to similar companies.", given: ["Price = $60", "EPS = $4.00"], worked: "P/E = 60 / 4\nP/E = 15" },
          { id: "equity-5-ev", name: "Enterprise value multiple — advanced", expression: "EV/EBITDA = <span class=\"frac\"><span class=\"num\">Enterprise value</span><span class=\"den\">EBITDA</span></span>", when: "Comparing companies with very different capital structures (debt levels), since enterprise value captures both debt and equity claims, sidestepping the leverage differences that can distort a pure equity-price-based multiple like P/E.", given: ["Market cap = $800M", "Total debt = $300M", "Cash = $100M", "EBITDA = $125M"], worked: "EV = 800 + 300 \u2212 100 = $1,000M\n\nEV/EBITDA = 1,000 / 125\nEV/EBITDA = 8.0" },
        ],
      },
      {
        id: "equity-5b",
        title: "Industry and competitive analysis",
        body: [`Before valuing an individual company, analysts often study the broader industry and competitive landscape it operates in, since a company's own performance is heavily shaped by the structure of the market around it. Porter's five forces framework is the standard tool for this: the intensity of rivalry among existing competitors, the threat of new entrants, the bargaining power of suppliers, the bargaining power of buyers, and the threat of substitute products. An industry where all five forces are weak (few competitors, high barriers to entry, weak suppliers and buyers, few substitutes) tends to support higher, more sustainable profitability than one where several forces are strong.`],
        formulas: [],
      },
      {
        id: "equity-6",
        title: "Market efficiency",
        body: [`The efficient market hypothesis describes the idea that stock prices already reflect available information, to varying degrees depending on which "form" of efficiency is assumed (weak, semi-strong, or strong). The stronger the assumed efficiency, the harder it becomes to consistently outperform the market using that category of information.`],
        formulas: [],
      },
      {
        id: "equity-7",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the question to the concept.`],
        decisionRows: [
          { cue: "A stock with a dividend expected to grow at a constant rate forever", formula: "Gordon growth (dividend discount) model", section: "equity-4" },
          { cue: "Comparing a stock's price to earnings/book value/sales of similar companies", formula: "Relative valuation multiples (P/E, etc.)", section: "equity-5" },
          { cue: "Fixed dividend, paid before common shareholders, usually no vote", formula: "Preferred stock", section: "equity-2" },
          { cue: "Residual ownership, votes, last claim on assets", formula: "Common stock", section: "equity-2" },
          { cue: "Finding the price at which a leveraged position triggers a broker call", formula: "Margin call price", section: "equity-3" },
          { cue: "A company with a growth rate expected to shift/slow over time", formula: "Two-stage DDM", section: "equity-4b" },
          { cue: "A company paying little/no dividend despite generating real cash", formula: "FCFE valuation", section: "equity-4b" },
          { cue: "Comparing companies with very different debt levels", formula: "EV/EBITDA multiple", section: "equity-5" },
          { cue: "Assessing industry structure and competitive intensity", formula: "Porter's five forces", section: "equity-5b" },
        ],
        formulas: [],
      },
      {
        id: "equity-8",
        title: "Common traps",
        type: "reference",
        body: [`Watch for these.`],
        referenceRows: [
          { item: "Using D0 instead of D1 in Gordon growth", detail: "The formula needs D1 (next year's expected dividend), not D0 (the dividend just paid)." },
          { item: "Forgetting the r > g requirement", detail: "Same trap as the growing perpetuity in Chapter 02." },
          { item: "Treating a low P/E as automatically \"cheap\"", detail: "A low multiple can also reflect real weaknesses rather than a bargain." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "fixedincome",
    number: "12",
    title: "Fixed Income",
    subtitle: "Bonds: how they're structured, priced, and how their risk is measured",
    sections: [
      {
        id: "fi-1",
        title: "Overview",
        body: [`Fixed income securities (bonds) are loans investors make to a borrower in exchange for scheduled interest payments and repayment of principal. Bond pricing is a direct, practical application of the annuity and single-sum formulas from Chapter 02.`],
        formulas: [],
      },
      {
        id: "fi-2",
        title: "Bond features and structure",
        body: [
          `A bond has a face value (also called par value — the amount repaid at maturity, commonly $1,000), a coupon rate (the stated annual interest rate paid to the bondholder), and a maturity date (when the face value is repaid). The coupon rate, applied to face value, sets the dollar coupon payment: a 6% coupon rate on $1,000 face value pays $60 per year, usually split into two $30 semiannual payments in practice.`,
          `The bond's cash flows are simply the coupon payments (an annuity) plus the face value repayment (a single sum) at maturity — the exact same two building blocks from Chapter 02, just combined into one instrument.`,
        ],
        formulas: [],
      },
      {
        id: "fi-2b",
        title: "Coupon structures: fixed, zero-coupon, and floating",
        body: [
          `Most bonds you'll encounter pay a fixed coupon rate for the bond's entire life — the $60/year example above. But two other coupon structures show up often enough to know by name.`,
          `A zero-coupon bond pays no periodic interest at all. It's sold for less than face value and simply repays the full face value at maturity; the entire return comes from that built-in price discount. Since there's no coupon annuity to value, pricing one is just the single-sum PV formula from Chapter 02.`,
          `A floating-rate bond (or "floater") resets its coupon periodically based on a reference rate plus a fixed spread — for example, "SOFR + 1.5%," recalculated every quarter. Because the coupon adjusts to match current market rates, a floater's price stays much closer to par than a fixed-rate bond's does when rates move.`,
        ],
        formulas: [
          { id: "fi-2b-zero", name: "Zero-coupon bond price", expression: "Price = <span class=\"frac\"><span class=\"num\">Face value</span><span class=\"den\">(1 + r)<sup>n</sup></span></span>", when: "No coupon payments at all — just a single lump sum at maturity.", given: ["Face value = $1,000", "r = 0.06", "n = 5"], worked: "Price = 1,000 / (1.06)<sup>5</sup>\nPrice \u2248 1,000 / 1.3382\nPrice \u2248 $747.26\n\n(the entire $252.74 gain over 5 years is the\nreturn \u2014 no coupons paid along the way)" },
        ],
      },
      {
        id: "fi-3",
        title: "Bond pricing",
        body: [
          `A bond's price is the present value of all its future cash flows: the coupon payments (an annuity) plus the face value (a single sum), both discounted at the market's required yield.`,
          `Core relationship: when market yields rise above a bond's coupon rate, its price falls below face value (a discount); when yields fall below the coupon rate, price rises above face value (a premium); when yields exactly equal the coupon rate, the bond prices at exactly face value (par). Bond prices and yields always move in opposite directions.`,
        ],
        exhibits: [{ afterParagraph: 0, svg: EXHIBIT_WORKED_BOND }, { afterParagraph: 1, svg: EXHIBIT_BOND_PRICE_MAP }],
        formulas: [
          { id: "fi-3-price", name: "Bond price", expression: "Price = PV(coupon annuity) + PV(face value)", when: "Finding a bond's fair price given its coupon, face value, maturity, and required yield.", given: ["Face value = $1,000", "Coupon = $60/year (6%)", "n = 3 years", "r = 0.08"], worked: "PV(coupons) \u2248 $154.63\nPV(face value) \u2248 $793.83\nPrice \u2248 154.63 + 793.83\nPrice \u2248 $948.46\n\n(a discount, since the 6% coupon is below the 8% yield)" },
        ],
      },
      {
        id: "fi-3b",
        title: "Par, discount, and premium bonds",
        body: [
          `These three terms describe where a bond's price sits relative to its face value, and they follow directly from the pricing relationship above — worth naming explicitly since exam questions use this vocabulary constantly.`,
          `A par bond trades at exactly its face value, which happens when the coupon rate equals the current market yield.`,
          `A discount bond trades below face value, which happens when the coupon rate is below the market yield — the bond's fixed coupon looks unattractive compared to current market rates, so investors will only buy it at a lower price.`,
          `A premium bond trades above face value, which happens when the coupon rate is above the market yield — the bond's fixed coupon looks attractive compared to current rates, so investors are willing to pay more than face value for it.`,
        ],
        formulas: [],
      },
      {
        id: "fi-4",
        title: "Yield measures",
        body: [
          `The current yield is a quick, rough measure of return, using only the coupon and today's price — it ignores any gain or loss from the price eventually converging to face value at maturity.`,
          `The yield to maturity (YTM) is the more complete measure — the single discount rate that makes the PV of all remaining cash flows equal the current price. YTM is effectively the bond's own IRR (see Corporate Issuers) and, unlike current yield, it captures the full return including any built-in price gain or loss to maturity. Like IRR, YTM typically has no simple closed-form formula — in practice it's found by iteration (or with a financial calculator's TVM worksheet, entering price as PV and solving for I/Y).`,
        ],
        formulas: [
          { id: "fi-4-current", name: "Current yield", expression: "Current yield = <span class=\"frac\"><span class=\"num\">Annual coupon payment</span><span class=\"den\">Current bond price</span></span>", when: "A quick, rough yield estimate — ignores any price gain/loss to maturity.", given: ["Annual coupon = $60", "Current price = $948"], worked: "Current yield = 60 / 948\nCurrent yield \u2248 6.33%\n\n(higher than the 6% coupon rate, simply because\nthe bond is trading below face value)" },
        ],
      },
      {
        id: "fi-4b",
        title: "Accrued interest and clean vs. dirty price",
        body: [
          `Bonds usually don't trade exactly on a coupon payment date — most trades happen somewhere in between. The seller has earned a portion of the next coupon simply by holding the bond since the last payment, and the buyer needs to compensate the seller for that, even though the buyer will eventually receive the full next coupon.`,
          `Accrued interest is that in-between amount: the portion of the next coupon the seller has already earned. The clean price is a bond's quoted price excluding accrued interest (what you typically see quoted); the dirty price (or "full" or "invoice" price) is the clean price plus accrued interest — the actual amount the buyer pays at settlement.`,
        ],
        formulas: [
          { id: "fi-4b-accrued", name: "Accrued interest (approximate)", expression: "Accrued interest = Annual coupon \u00D7 <span class=\"frac\"><span class=\"num\">Days since last coupon</span><span class=\"den\">Days in coupon period</span></span>", when: "Finding how much of the next coupon the seller has already earned.", given: ["Annual coupon = $60", "Days since last coupon = 90", "Days in coupon period = 360", "Clean price = $980"], worked: "Accrued interest = 60 \u00D7 (90/360)\nAccrued interest = $15\n\nDirty price = 980 + 15 = $995\n(the actual amount the buyer pays at settlement)" },
        ],
      },
      {
        id: "fi-5",
        title: "The yield curve and term structure",
        body: [`The yield curve plots yields against maturities for otherwise similar bonds. A normal, upward-sloping yield curve reflects the extra compensation investors typically demand for tying up money longer. A flat yield curve shows little difference in yield across maturities. An inverted yield curve (short-term higher than long-term) is unusual and often watched as a potential signal of economic concern.`],
        exhibits: [{ afterParagraph: 0, svg: EXHIBIT_YIELD_CURVE_SHAPES }],
        formulas: [],
      },
      {
        id: "fi-6",
        title: "Macaulay duration and modified duration",
        body: [
          `Duration measures a bond's sensitivity to changes in interest rates, but the term actually covers a small family of related measures, and it's worth knowing which one is which.`,
          `Macaulay duration is the foundational version: the weighted-average time (in years) until a bondholder receives the bond's cash flows, where each cash flow's weight is the proportion of the bond's total present value that it represents. A bond with only a single cash flow (a zero-coupon bond) has a Macaulay duration exactly equal to its maturity, since there's only one cash flow to wait for; a coupon-paying bond's Macaulay duration is always shorter than its maturity, since some value arrives earlier via the coupons.`,
          `Modified duration adjusts Macaulay duration to directly estimate price sensitivity to yield changes — it's Macaulay duration scaled down by the periodic yield, and it's the version that plugs directly into the price-change approximation below. Longer-maturity bonds and lower-coupon bonds generally have higher duration (of either kind), because more of their value sits further out in time, where discounting has a bigger effect on present value.`,
        ],
        formulas: [
          { id: "fi-6-modified", name: "Modified duration (from Macaulay duration)", expression: "Modified duration = <span class=\"frac\"><span class=\"num\">Macaulay duration</span><span class=\"den\">1 + periodic yield</span></span>", when: "Converting Macaulay duration into the form used to directly estimate price sensitivity.", given: ["Macaulay duration = 4.5 years", "Periodic yield = 0.06"], worked: "Modified duration = 4.5 / 1.06\nModified duration \u2248 4.25" },
          { id: "fi-6-duration", name: "Approximate price change from duration", expression: "% change in price \u2248 \u2212 Modified duration \u00D7 (change in yield)", when: "Estimating how much a bond's price will move for a given change in market yield.", given: ["Modified duration = 7", "Change in yield = 0.005 (+0.50 percentage points)"], worked: "% change in price \u2248 \u22127 \u00D7 0.005\n% change in price \u2248 \u22123.5%" },
        ],
      },
      {
        id: "fi-6a2",
        title: "Convexity",
        body: [
          `Duration's price-change approximation is a straight-line estimate, but the true relationship between a bond's price and its yield is actually curved, not straight — convexity measures that curvature, and captures the part of the price change duration alone misses.`,
          `A bond with positive convexity (true of most ordinary, option-free bonds) gains more from a given yield decrease than it loses from an equal-sized yield increase — meaning duration alone tends to understate price gains and overstate price losses. Adding a convexity adjustment to the duration estimate corrects for this, and the correction matters more the larger the yield change is, since the "curve versus straight line" gap widens the further you move from the starting point.`,
          `Bonds with embedded options behave differently: a callable bond's price gains are capped as yields fall (since the issuer becomes more likely to call it away), giving it negative convexity in that range — one more reason embedded call features are a risk to the bondholder, not just the reinvestment-timing risk covered earlier.`,
        ],
        formulas: [
          { id: "fi-6a2-adj", name: "Full price change estimate (duration + convexity)", expression: "% change in price \u2248 [\u2212 Modified duration \u00D7 \u0394y] + [\u00BD \u00D7 Convexity \u00D7 (\u0394y)<sup>2</sup>]", when: "Getting a more accurate price-change estimate than duration alone provides, especially for larger yield changes.", given: ["Modified duration = 7", "Convexity = 65", "\u0394y = 0.02 (+2 percentage points)"], worked: "Duration-only: \u22127 \u00D7 0.02 = \u221214%\nConvexity adj.: \u00BD \u00D7 65 \u00D7 (0.02)<sup>2</sup> \u2248 +1.3%\n\nCombined: \u221214% + 1.3% = \u221212.7%\n\n(a noticeably smaller loss than duration alone\nsuggested \u2014 positive convexity cushions the downside)" },
        ],
      },
      {
        id: "fi-6b",
        title: "Callable, putable, and convertible bonds",
        body: [
          `Beyond the plain, fixed-maturity structure covered so far, three common embedded features change a bond's risk profile.`,
          `A callable bond gives the issuer the right to repay the bond early — typically used when rates have fallen and the issuer wants to refinance at a lower rate. This is a risk to the bondholder: the bond is most likely to get called away right when reinvesting the proceeds at an equally attractive rate has become hardest.`,
          `A putable bond gives the bondholder the right to sell the bond back to the issuer early, at a preset price — the mirror image of callable, and a benefit to the bondholder rather than the issuer.`,
          `A convertible bond gives the bondholder the right to convert the bond into a predetermined number of the issuer's common shares — effectively bundling a bond with a call option on the stock.`,
        ],
        formulas: [],
      },
      {
        id: "fi-6c",
        title: "Securitization: ABS and MBS",
        body: [
          `Securitization is the process of pooling many individual loans or receivables together (mortgages, auto loans, credit card debt) and converting that pool into tradable bonds, backed by the cash flows those underlying loans generate. This lets the original lender free up capital to make new loans, rather than holding every loan on its own balance sheet until maturity.`,
          `A mortgage-backed security (MBS) is securitized specifically from a pool of mortgage loans; the broader category, asset-backed security (ABS), covers securitization from other loan types, like auto loans or credit card receivables. A key risk specific to mortgage-related securitization: prepayment risk — homeowners can pay off their mortgages early (often by refinancing when rates fall), which returns principal to MBS investors earlier than expected, right when reinvesting it at an equally attractive rate is hardest — the same underlying problem as callable bond risk, just arising structurally from the pool of borrowers rather than from an explicit call feature.`,
        ],
        formulas: [],
      },
      {
        id: "fi-7",
        title: "Credit risk",
        body: [`Credit risk is the risk that a bond's issuer fails to make its promised payments (default). Credit rating agencies assign letter grades reflecting that risk: ratings from AAA down through BBB− are considered "investment grade," reflecting relatively low default risk and typically lower yields; ratings of BB+ and below are considered "high yield" or "junk," reflecting higher default risk and offering higher yields to compensate for that extra risk.`],
        formulas: [],
      },
      {
        id: "fi-8",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the question to the concept.`],
        decisionRows: [
          { cue: "Finding a bond's price given coupon, face value, maturity, required yield", formula: "Bond pricing (PV of coupon annuity + PV of face value)", section: "fi-3" },
          { cue: "A bond with no periodic coupon, just a lump sum at maturity", formula: "Zero-coupon bond pricing (single sum PV)", section: "fi-2b" },
          { cue: "Whether a bond trades above, at, or below face value", formula: "Par / discount / premium bond", section: "fi-3b" },
          { cue: "A quick yield estimate using only the coupon and current price", formula: "Current yield", section: "fi-4" },
          { cue: "The full, precise annualized return if held to maturity", formula: "Yield to maturity (YTM)", section: "fi-4" },
          { cue: "How much of the next coupon a seller has already earned mid-period", formula: "Accrued interest / dirty price", section: "fi-4b" },
          { cue: "Comparing yields across different maturities", formula: "Yield curve", section: "fi-5" },
          { cue: "Weighted-average time until a bond's cash flows are received", formula: "Macaulay duration", section: "fi-6" },
          { cue: "Estimating a bond's price change from a change in yield", formula: "Modified duration", section: "fi-6" },
          { cue: "Improving the price-change estimate for larger yield changes", formula: "Convexity adjustment", section: "fi-6a2" },
          { cue: "An issuer's right to redeem a bond before maturity", formula: "Callable bond", section: "fi-6b" },
          { cue: "A bond backed by a pool of mortgages or other loans", formula: "Securitization (MBS/ABS)", section: "fi-6c" },
          { cue: "Risk that the issuer won't pay", formula: "Credit risk", section: "fi-7" },
        ],
        formulas: [],
      },
      {
        id: "fi-9",
        title: "Common traps",
        type: "reference",
        body: [`Watch for these.`],
        referenceRows: [
          { item: "Assuming bond price and yield move together", detail: "They always move in opposite directions." },
          { item: "Confusing coupon rate with yield to maturity", detail: "Coupon rate is fixed at issuance; YTM changes constantly with market prices." },
          { item: "Assuming equal-maturity bonds have equal duration", detail: "Coupon rate matters too — lower coupons mean higher duration." },
          { item: "Confusing clean price with the actual amount paid", detail: "The dirty price (clean price + accrued interest) is what the buyer actually pays at settlement." },
          { item: "Assuming \"callable\" benefits the bondholder", detail: "Callable features favor the issuer; putable and convertible features favor the bondholder." },
          { item: "Using Macaulay duration directly in the price-change formula", detail: "The price-change approximation needs modified duration, not Macaulay duration — convert first." },
          { item: "Forgetting convexity on larger yield changes", detail: "Duration alone is a straight-line approximation; the convexity adjustment corrects for the true curved price-yield relationship, and matters more as the yield change grows." },
        ],
        formulas: [],
      },
      {
        id: "fi-10",
        title: "Addendum: Interactive Formula Mind Map",
        body: [
          `Fixed income has three formula families that each branch off a shared idea: pricing a bond, measuring its yield, and measuring how sensitive its price is to rate changes. The map below organizes every Fixed Income formula in this chapter by which of those three questions it answers. Click any box to see a full worked word problem.`,
        ],
        interactiveExhibit: "fiMindmap",
        formulas: [],
      },
    ],
  },
  {
    id: "derivatives",
    number: "13",
    title: "Derivatives",
    subtitle: "Contracts whose value is derived from something else",
    sections: [
      {
        id: "deriv-1",
        title: "Overview",
        body: [`A derivative is a financial contract whose value depends on ("derives from") the price of some other underlying asset — a stock, a bond, a commodity, an interest rate. This chapter covers the four main derivative types and why investors use them.`],
        formulas: [],
      },
      {
        id: "deriv-2",
        title: "Forwards and futures",
        body: [
          `A forward contract is a private agreement between two parties to buy or sell an asset at a specified price on a specified future date. A futures contract does the same thing, but is standardized and exchange-traded, which adds liquidity and reduces counterparty risk.`,
          `Worked example: a wheat farmer and a bakery agree today on a forward contract to exchange 10,000 bushels of wheat in 6 months at $6.00/bushel. Regardless of the market price of wheat in 6 months, both sides are obligated to transact at $6.00.`,
        ],
        formulas: [],
      },
      {
        id: "deriv-3",
        title: "Options",
        body: [
          `An option gives its buyer the right, but not the obligation, to buy or sell the underlying asset at a specified strike price. A call option gives the right to buy; a put option gives the right to sell. The buyer pays an upfront premium for this right.`,
          `Worked example: an investor buys a call option with a $50 strike price, paying a $3 premium. If the stock rises to $60, exercising nets a $10 gain minus the $3 premium = $7 profit per share. If the stock falls to $40, the investor lets the option expire, losing only the $3 premium — never more.`,
        ],
        formulas: [],
      },
      {
        id: "deriv-3b",
        title: "Intrinsic value and time value",
        body: [`An option's premium splits into two components. Intrinsic value is what the option would be worth if exercised right now — for a call, the amount by which the stock price exceeds the strike price (zero if the stock is below the strike); for a put, the reverse. Time value is whatever's left of the premium beyond intrinsic value — compensation for the possibility that the option becomes more valuable before it expires. Time value shrinks toward zero as expiration approaches, since less time remains for the underlying price to move favorably — an effect commonly called time decay.`],
        formulas: [],
      },
      {
        id: "deriv-3c",
        title: "Put-call parity",
        body: [`Put-call parity is a direct application of the no-arbitrage principle from Quantitative Methods: a call option, a put option (same strike, same expiration, same underlying), and the underlying stock and a bond are all linked by one fixed relationship. If the actual market prices ever drifted away from this relationship, an arbitrageur could combine these instruments to lock in a riskless profit — which is exactly why the relationship holds in efficient markets.`],
        formulas: [
          { id: "deriv-3c-parity", name: "Put-call parity", expression: "Call price + <span class=\"frac\"><span class=\"num\">Strike price</span><span class=\"den\">(1+r)<sup>t</sup></span></span> = Put price + Stock price", when: "Checking whether call price, put price, strike, and stock price are mutually consistent — or backing out one of them given the other three.", given: ["Stock price = $52", "Strike = $50", "r = 0.04", "t = 1 year", "Put price = $2.50"], worked: "Call + 50/(1.04) = 2.50 + 52\nCall + 48.08 = 54.50\nCall \u2248 $6.42" },
        ],
      },
      {
        id: "deriv-3d",
        title: "The cost of carry model",
        body: [`The cost of carry model explains how a forward or futures price relates to the underlying asset's current spot price: the forward price should equal the spot price grown forward at the risk-free rate, adjusted for any costs of holding the asset (like storage costs for a physical commodity) minus any benefits of holding it (like dividends received on a stock, or convenience yield for a commodity in short supply). If a forward price ever strayed from this no-arbitrage relationship, the same kind of arbitrage described in put-call parity would again be available.`],
        formulas: [
          { id: "deriv-3d-carry", name: "Cost of carry (forward price)", expression: "Forward price = Spot price \u00D7 (1+r)<sup>t</sup> + Carry costs \u2212 Carry benefits", when: "Finding the no-arbitrage forward price of an asset, given its spot price and the costs/benefits of holding it.", given: ["Spot price = $100", "r = 0.05", "t = 1 year", "Carry benefits = $0 (no dividend)"], worked: "Forward price = 100 \u00D7 (1.05)\nForward price = $105\n\n(if the stock instead paid a $2 dividend,\nforward price = 105 \u2212 2 = $103)" },
        ],
      },
      {
        id: "deriv-3e",
        title: "The one-period binomial model — advanced",
        body: [`The binomial model prices an option by imagining just two possible outcomes for the underlying asset over one period: an "up" move or a "down" move, each with an assumed size and probability. Working backward from the option's known payoff in each of those two future states, the model finds today's option value using the same no-arbitrage logic behind put-call parity and cost of carry — constructing a riskless combination of the option and the underlying stock, which must therefore earn exactly the risk-free rate. Extending this same idea across many small periods, rather than just one, is the conceptual bridge toward more advanced option pricing models used at later levels of the curriculum.`],
        formulas: [],
      },
      {
        id: "deriv-4",
        title: "Swaps",
        body: [`A swap is an agreement between two parties to exchange cash flows over time. The most common type, an interest rate swap, typically involves one party paying a fixed rate while receiving a floating rate from the other, often used to change interest rate exposure without refinancing.`],
        formulas: [],
      },
      {
        id: "deriv-5",
        title: "Why investors use derivatives",
        body: [`Derivatives are generally used for hedging (reducing an existing risk) or speculation (taking on new risk in pursuit of profit).`],
        formulas: [],
      },
      {
        id: "deriv-6",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the question to the concept.`],
        decisionRows: [
          { cue: "An obligation for both sides to transact at a set price/date, privately negotiated", formula: "Forward", section: "deriv-2" },
          { cue: "Same obligation, but standardized and exchange-traded", formula: "Futures", section: "deriv-2" },
          { cue: "The right, not the obligation, to buy at a set price", formula: "Call option", section: "deriv-3" },
          { cue: "The right, not the obligation, to sell at a set price", formula: "Put option", section: "deriv-3" },
          { cue: "What an option would be worth if exercised right now", formula: "Intrinsic value", section: "deriv-3b" },
          { cue: "Checking whether call/put/stock/strike prices are mutually consistent", formula: "Put-call parity", section: "deriv-3c" },
          { cue: "Finding a forward price from the spot price plus/minus holding costs", formula: "Cost of carry model", section: "deriv-3d" },
          { cue: "Pricing an option using two possible future outcomes", formula: "One-period binomial model", section: "deriv-3e" },
          { cue: "Exchanging fixed for floating interest payments over time", formula: "Interest rate swap", section: "deriv-4" },
          { cue: "Reducing an existing risk", formula: "Hedging", section: "deriv-5" },
          { cue: "Taking on new risk for potential profit", formula: "Speculation", section: "deriv-5" },
        ],
        formulas: [],
      },
      {
        id: "deriv-7",
        title: "Common traps",
        type: "reference",
        body: [`Watch for these.`],
        referenceRows: [
          { item: "Confusing options with forwards/futures", detail: "Options give a right; forwards and futures are obligations for both parties." },
          { item: "Assuming an option buyer's loss is unlimited", detail: "An option buyer's maximum loss is the premium paid, full stop." },
          { item: "Mixing up hedging and speculation", detail: "The same instrument can be either — the intent is what defines it." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "altinvest",
    number: "14",
    title: "Alternative Investments",
    subtitle: "Everything outside traditional stocks and bonds",
    sections: [
      {
        id: "alt-1",
        title: "Overview",
        body: [`Alternative investments cover a wide, varied category of assets that don't fit neatly into traditional stock/bond buckets. What ties them together is less about what they are and more about shared characteristics: typically less liquid, less transparent, and often less correlated with traditional markets.`],
        formulas: [],
      },
      {
        id: "alt-2",
        title: "Major categories",
        body: [
          `Real estate — direct property ownership, or shares in a real estate investment trust (REIT) that owns and manages properties on investors' behalf.`,
          `Private equity / venture capital — direct ownership stakes in companies not listed on public exchanges, often involving active involvement in company strategy.`,
          `Hedge funds — pooled investment vehicles that pursue a wide range of strategies, often with more flexibility (including leverage and short-selling) than traditional funds.`,
          `Commodities — physical goods like oil, gold, or agricultural products, typically accessed through futures contracts rather than by holding the physical good directly.`,
          `Infrastructure — investments in long-lived physical assets like toll roads, airports, or utilities, often valued for their stable, inflation-linked cash flows.`,
        ],
        formulas: [],
      },
      {
        id: "alt-2b",
        title: "Hedge fund fee structures and performance measurement",
        body: [
          `Hedge funds typically charge fees very differently from traditional mutual funds — a structure often summarized as "2 and 20": roughly a 2% annual management fee (charged on assets under management, regardless of performance) plus a 20% performance fee (charged only on profits actually earned). Two additional features commonly attach to that performance fee: a hurdle rate (a minimum return the fund must clear before any performance fee is charged at all) and a high-water mark (ensuring a fund can't charge a performance fee on gains that merely recover a previous loss — the fund must exceed its prior peak value first).`,
          `This fee structure is also exactly why performance should always be evaluated both before and after fees: a fund's raw investment performance can look attractive before fees, but a heavy 2-and-20 structure can meaningfully erode what an investor actually keeps, especially in a fund with high turnover or frequent profitable periods.`,
        ],
        formulas: [],
      },
      {
        id: "alt-2c",
        title: "Private capital: equity vs. debt",
        body: [`Private capital splits into two distinct categories worth telling apart. Private equity takes ownership stakes in companies, and itself divides further by company stage: venture capital funds early-stage, often pre-profitable companies in exchange for equity, accepting high risk for the chance at outsized returns; buyout funds (sometimes called leveraged buyouts) instead acquire mature, established companies, often using significant debt financing to fund the purchase. Private debt, by contrast, involves lending directly to companies (frequently smaller or mid-sized ones that may have limited access to public bond markets or bank loans) rather than taking an ownership stake — occupying a different, generally more senior position in a company's capital structure than private equity does.`],
        formulas: [],
      },
      {
        id: "alt-3",
        title: "Key characteristics versus traditional investments",
        body: [`Alternative investments typically share several traits: illiquidity (money often locked up for years), higher fees, limited transparency, and diversification potential — returns are often less correlated with traditional markets, which can improve a portfolio's overall risk-return profile. This connects directly to the correlation concept from Probability & Statistics and resurfaces in Portfolio Management.`],
        formulas: [],
      },
      {
        id: "alt-3b",
        title: "Digital assets",
        body: [`Digital assets — cryptocurrencies and other blockchain-based instruments — are one of the newer additions to the alternative investment landscape. Cryptocurrencies (like Bitcoin) function as a digital medium of exchange or store of value without relying on a central issuing authority like a government or central bank, instead relying on a distributed ledger (blockchain) maintained across a decentralized network of computers to record and verify transactions. Investment characteristics that set digital assets apart from traditional alternatives: extremely high price volatility, a relatively short historical track record to draw on, evolving and still-developing regulatory treatment across different countries, and valuation approaches that remain far less settled than those used for traditional assets like stocks, bonds, or real estate.`],
        formulas: [],
      },
      {
        id: "alt-4",
        title: "Decision guide",
        type: "decision-guide",
        body: [`Match the description to the category.`],
        decisionRows: [
          { cue: "Direct property ownership or a REIT", formula: "Real estate", section: "alt-2" },
          { cue: "An ownership stake in a private, non-listed company", formula: "Private equity / venture capital", section: "alt-2" },
          { cue: "A flexible pooled fund using leverage or short-selling", formula: "Hedge fund", section: "alt-2" },
          { cue: "Physical goods like oil, gold, or crops", formula: "Commodities", section: "alt-2" },
          { cue: "Long-lived physical assets like toll roads or utilities", formula: "Infrastructure", section: "alt-2" },
          { cue: "A fund charging roughly 2% management + 20% of profits", formula: "\"2 and 20\" hedge fund fee structure", section: "alt-2b" },
          { cue: "A minimum return that must be cleared before performance fees apply", formula: "Hurdle rate", section: "alt-2b" },
          { cue: "Funding an early-stage, pre-profitable company for equity", formula: "Venture capital", section: "alt-2c" },
          { cue: "Lending directly to a company rather than taking an ownership stake", formula: "Private debt", section: "alt-2c" },
          { cue: "Cryptocurrency and blockchain-based instruments", formula: "Digital assets", section: "alt-3b" },
        ],
        formulas: [],
      },
      {
        id: "alt-5",
        title: "Common traps",
        type: "reference",
        body: [`Watch for these.`],
        referenceRows: [
          { item: "Assuming \"alternative\" means \"riskier\" across the board", detail: "Risk varies enormously — infrastructure can be quite stable, while venture capital can be extremely volatile." },
          { item: "Assuming alternatives are always a good diversifier", detail: "Depends on genuinely low correlation with the rest of the portfolio — not automatic." },
          { item: "Forgetting the illiquidity trade-off", detail: "Investors typically demand an \"illiquidity premium\" for not being able to access money quickly." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "portfolio",
    number: "15",
    title: "Portfolio Management",
    subtitle: "Combining investments so the whole is better than the sum of its parts",
    sections: [
      {
        id: "port-1",
        title: "Overview",
        body: [`Portfolio management is about combining individual investments into a single portfolio in a way that manages overall risk while pursuing return — leaning directly on the variance, covariance, and correlation concepts introduced in Probability & Statistics.`],
        formulas: [],
      },
      {
        id: "port-2",
        title: "The portfolio management process",
        body: [`Professional portfolio management typically follows a repeating cycle: planning (understanding the investor's goals, constraints, and risk tolerance), execution (selecting and combining specific investments), and feedback (monitoring performance and rebalancing) — then returning to planning as circumstances change.`],
        formulas: [],
      },
      {
        id: "port-2b",
        title: "Investor types and the asset management industry",
        body: [
          `Investors come in two broad categories with meaningfully different needs: individual investors manage their own wealth (or have it managed) toward personal goals like retirement or a home purchase; institutional investors manage large pools of money on behalf of others — pension funds, endowments, insurance companies, and sovereign wealth funds among them.`,
          `Pension plans split into two structures with very different risk allocation: a defined benefit (DB) plan promises retirees a specific future payout, putting the funding-shortfall risk on the sponsoring company (the same distinction introduced in Financial Statement Analysis); a defined contribution (DC) plan only promises to contribute a set amount today, putting investment-outcome risk on the employee.`,
          `Retail investors can also access professionally managed portfolios through pooled vehicles — mutual funds (actively or passively managed, priced once daily) and exchange-traded funds, or ETFs (which trade throughout the day like a stock and are most commonly passively managed to track an index).`,
        ],
        formulas: [],
      },
      {
        id: "port-3",
        title: "Risk and return of a portfolio",
        body: [
          `A portfolio's expected return is simply the weighted average of the expected returns of its individual holdings, weighted by how much of the portfolio's value each holding represents.`,
          `A portfolio's risk, however, is not simply the weighted average of the individual risks — because how the holdings move together (their covariance/correlation) affects the portfolio's overall variance. This is the mathematical foundation of diversification.`,
          `Among every possible two-asset portfolio you could build from a given pair of stocks, one specific mix produces the lowest possible risk — the global minimum-variance portfolio. It isn't necessarily the mix with the highest return; it's simply the one where the assets' offsetting movements cancel out as much risk as mathematically possible.`,
        ],
        formulas: [
          { id: "port-3-return", name: "Portfolio expected return", expression: "E(Rp) = \u03A3 [ wi \u00D7 E(Ri) ]", when: "Finding a portfolio's overall expected return from its holdings' weights and expected returns.", given: ["wA = 0.60, E(RA) = 10%", "wB = 0.40, E(RB) = 6%"], worked: "E(Rp) = (0.60\u00D710%) + (0.40\u00D76%)\nE(Rp) = 6% + 2.4%\nE(Rp) = 8.4%" },
          { id: "port-3-minvar", name: "Minimum-variance weight (two-asset portfolio) — advanced", expression: "w1 = <span class=\"frac\"><span class=\"num\">\u03C32\u00B2 \u2212 Cov(1,2)</span><span class=\"den\">\u03C31\u00B2 + \u03C32\u00B2 \u2212 2 \u00D7 Cov(1,2)</span></span>", when: "Finding the weight in asset 1 that minimizes the overall portfolio's variance, for a two-asset portfolio.", given: ["\u03C31\u00B2 = 0.04", "\u03C32\u00B2 = 0.09", "Cov(1,2) = 0.02"], worked: "w1 = (0.09 \u2212 0.02) / (0.04 + 0.09 \u2212 2\u00D70.02)\nw1 = 0.07 / 0.09\nw1 \u2248 77.8%\n\n(holds about 78% Stock 1, 22% Stock 2 \u2014\nnot the highest-return mix, just the lowest-risk one)" },
        ],
      },
      {
        id: "port-4",
        title: "Diversification, in plain terms",
        body: [`If two stocks are perfectly positively correlated (correlation = +1), combining them provides no risk-reduction benefit. But if two stocks have a correlation below +1 (especially if negative), combining them can reduce the portfolio's overall risk below either stock's individual risk, since their ups and downs partially offset each other. The lower the correlation between holdings, the greater the diversification benefit.`],
        exhibits: [{ afterParagraph: 0, svg: EXHIBIT_WORKED_DIVERSIFICATION }],
        formulas: [],
      },
      {
        id: "port-5",
        title: "The efficient frontier, capital allocation line, and capital market line",
        body: [
          `Plotting every possible portfolio combination of risky assets by risk and expected return traces out a curve; the efficient frontier is the upper-left edge — the set of portfolios offering the highest expected return for each level of risk.`,
          `Adding a risk-free asset creates the capital allocation line (CAL) — a straight line from the risk-free rate through a chosen risky portfolio, representing every risk-free/risky blend an investor could choose. When that chosen risky portfolio is specifically the market portfolio (the single risky portfolio every rational investor would hold, under the theory's assumptions), that particular CAL gets its own name: the capital market line (CML). Every investor, in this framework, ends up holding some blend of the risk-free asset and that same market portfolio — differing only in how much of each, based on their personal risk tolerance.`,
        ],
        exhibits: [{ afterParagraph: 1, svg: EXHIBIT_EFFICIENT_FRONTIER }],
        formulas: [],
      },
      {
        id: "port-5b",
        title: "Systematic vs. unsystematic risk",
        body: [
          `Not all risk behaves the same way once you're holding a diversified portfolio. Unsystematic risk (also called diversifiable or firm-specific risk) is risk unique to one company or industry — a factory fire, a product recall, a lawsuit — and diversification genuinely eliminates most of it, since one company's bad luck tends to be offset by another's good luck across a large enough portfolio.`,
          `Systematic risk (also called market or non-diversifiable risk) is risk that affects the entire market at once — a recession, a broad interest rate change — and no amount of diversification removes it, since it moves every holding in the same direction simultaneously. This distinction matters enormously: an investor should only expect to be compensated with extra return for bearing systematic risk, since unsystematic risk could have been diversified away for free.`,
        ],
        formulas: [],
      },
      {
        id: "port-5c",
        title: "CAPM and the security market line",
        body: [
          `The capital asset pricing model (CAPM) formalizes the idea from the previous section: an asset's required return depends only on its systematic risk, measured by beta — the same beta calculated via regression in the Quantitative Methods chapter. A beta of 1.0 means the asset moves in line with the market; a beta above 1.0 means it amplifies market moves; a beta below 1.0 means it dampens them.`,
          `Plotting CAPM's required return against beta for every possible value of beta traces out the security market line (SML) — a straight line starting at the risk-free rate (where beta is zero) and rising through the market return (where beta equals one). Any asset priced so that it sits above the SML is offering more return than its systematic risk justifies (undervalued); any asset below the line is offering less (overvalued) — at least according to the model.`,
        ],
        exhibits: [{ afterParagraph: 1, svg: EXHIBIT_SML }],
        formulas: [
          { id: "port-5c-capm", name: "Capital asset pricing model (CAPM)", expression: "E(Ri) = Rf + \u03B2i \u00D7 [E(Rm) \u2212 Rf]", when: "Finding an asset's required return based purely on its systematic risk (beta).", given: ["Rf = 3%", "E(Rm) = 9%", "\u03B2i = 1.4"], worked: "E(Ri) = 3% + 1.4 \u00D7 (9% \u2212 3%)\nE(Ri) = 3% + 1.4 \u00D7 6%\nE(Ri) = 3% + 8.4%\nE(Ri) = 11.4%" },
        ],
      },
      {
        id: "port-5d",
        title: "Evaluating portfolio performance",
        body: [
          `Raw return alone doesn't tell you whether a portfolio manager did a good job — a higher return earned by taking on much more risk isn't necessarily better. Several ratios adjust return for risk to make a fairer comparison.`,
          `The Sharpe ratio measures excess return (over the risk-free rate) per unit of total risk (standard deviation) — appropriate when evaluating a portfolio that represents an investor's entire holdings. The Treynor ratio measures excess return per unit of systematic risk (beta) only — more appropriate when evaluating one holding that's part of a larger, already-diversified portfolio, where unsystematic risk is less relevant. Jensen's alpha measures the actual return earned above and beyond what CAPM would have predicted for that level of systematic risk — a positive alpha suggests genuine outperformance after adjusting for risk.`,
        ],
        formulas: [
          { id: "port-5d-sharpe", name: "Sharpe ratio", expression: "Sharpe = <span class=\"frac\"><span class=\"num\">Rp \u2212 Rf</span><span class=\"den\">\u03C3p</span></span>", when: "Comparing risk-adjusted return using total risk — appropriate for an investor's entire portfolio.", given: ["Rp = 11%", "Rf = 3%", "\u03C3p = 16%"], worked: "Sharpe = (11% \u2212 3%) / 16%\nSharpe = 8/16\nSharpe = 0.50" },
          { id: "port-5d-treynor", name: "Treynor ratio", expression: "Treynor = <span class=\"frac\"><span class=\"num\">Rp \u2212 Rf</span><span class=\"den\">\u03B2p</span></span>", when: "Comparing risk-adjusted return using only systematic risk — appropriate for one holding within a larger diversified portfolio.", given: ["Rp = 11%", "Rf = 3%", "\u03B2p = 1.2"], worked: "Treynor = (11% \u2212 3%) / 1.2\nTreynor = 8 / 1.2\nTreynor \u2248 6.67" },
          { id: "port-5d-jensen", name: "Jensen's alpha", expression: "\u03B1p = Rp \u2212 [Rf + \u03B2p \u00D7 (Rm \u2212 Rf)]", when: "Measuring return earned above or below what CAPM predicts for that level of systematic risk.", given: ["Rp = 11%", "\u03B2p = 1.2", "Rf = 3%", "Rm = 9%"], worked: "CAPM-predicted = 3% + 1.2\u00D7(9%\u22123%)\nCAPM-predicted = 3% + 7.2% = 10.2%\n\n\u03B1p = 11% \u2212 10.2%\n\u03B1p = 0.8%\n\n(small positive alpha \u2014 modest outperformance\nafter adjusting for systematic risk)" },
        ],
      },
      {
        id: "port-5e",
        title: "The Investment Policy Statement",
        body: [
          `An Investment Policy Statement (IPS) is the foundational document that formally records an investor's objectives and constraints before any portfolio gets built — the practical starting point of the entire planning process introduced earlier in this chapter.`,
          `Objectives split into risk and return: a return objective states what the investor needs or wants to earn; a risk objective captures both the investor's willingness to take risk (their psychological comfort with volatility) and their ability to take risk (their actual financial capacity to absorb losses, based on factors like time horizon and income stability) — these two don't always agree, and when they conflict, the more conservative of the two generally governs.`,
          `Constraints capture the practical boundaries within which the portfolio must operate: liquidity needs (cash requirements for near-term spending), time horizon (when the money will actually be needed), tax considerations, legal/regulatory constraints, and unique circumstances (anything else specific to that investor, like a concentrated stock position or an ethical restriction on certain investments).`,
        ],
        formulas: [],
      },
      {
        id: "port-5f",
        title: "Behavioral biases",
        body: [
          `Real investors don't always behave the way traditional finance theory assumes. Behavioral biases fall into two broad categories.`,
          `Cognitive errors stem from faulty reasoning or information processing — and are somewhat correctable once recognized. Examples include confirmation bias (favoring information that supports an existing belief while discounting contrary evidence) and anchoring (relying too heavily on an initial piece of information, like a stock's purchase price, when making later decisions).`,
          `Emotional biases stem from feelings and impulses rather than faulty logic — and tend to be harder to correct through information alone, since they aren't really a reasoning error to begin with. Examples include loss aversion (feeling the pain of a loss more intensely than the pleasure of an equivalent gain, which can cause investors to hold losing positions too long) and overconfidence (overestimating one's own investment skill or judgment).`,
        ],
        formulas: [],
      },
      {
        id: "port-5g",
        title: "Introduction to risk management",
        body: [
          `Risk management is the ongoing discipline of identifying, measuring, and deliberately deciding what to do about the risks a portfolio (or an institution) faces — not simply avoiding risk altogether, since risk-taking is how returns get earned in the first place, but taking on risk deliberately and at a scale the investor can actually tolerate.`,
          `Risk governance sets the overall framework and oversight for how risk decisions get made and who's accountable for them. Risk budgeting allocates a limited "risk tolerance" across different strategies or asset classes, similar in spirit to a financial budget, but allocating risk rather than dollars. Once risks are identified, they can be modified in one of a few ways: avoided (not taking the risk at all), reduced (lowering exposure), transferred (shifting it to someone else, such as through insurance or derivatives), or accepted (deliberately retained, usually because the expected reward justifies it).`,
        ],
        formulas: [],
      },
      {
        id: "port-6",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the question to the concept.`],
        decisionRows: [
          { cue: "A portfolio's expected return given its holdings' weights and expected returns", formula: "Weighted average formula (E(Rp))", section: "port-3" },
          { cue: "The two-asset portfolio with the lowest possible risk", formula: "Global minimum-variance portfolio", section: "port-3" },
          { cue: "Whether combining two assets reduces risk", formula: "Correlation between the two assets", section: "port-4" },
          { cue: "The best possible risk-return trade-off available from risky assets", formula: "Efficient frontier", section: "port-5" },
          { cue: "Combining a risk-free asset with the market portfolio specifically", formula: "Capital market line (CML)", section: "port-5" },
          { cue: "Risk that diversification can eliminate", formula: "Unsystematic (diversifiable) risk", section: "port-5b" },
          { cue: "Risk that diversification cannot eliminate", formula: "Systematic (market) risk", section: "port-5b" },
          { cue: "Required return based purely on beta / systematic risk", formula: "CAPM", section: "port-5c" },
          { cue: "Risk-adjusted return for an investor's whole portfolio (uses total risk)", formula: "Sharpe ratio", section: "port-5d" },
          { cue: "Risk-adjusted return for one holding in a diversified portfolio (uses beta)", formula: "Treynor ratio", section: "port-5d" },
          { cue: "Return earned above/below what CAPM would predict", formula: "Jensen's alpha", section: "port-5d" },
          { cue: "The document recording an investor's objectives and constraints", formula: "Investment Policy Statement (IPS)", section: "port-5e" },
          { cue: "A reasoning error that's somewhat correctable with information", formula: "Cognitive error", section: "port-5f" },
          { cue: "A feelings-driven bias, harder to correct with information alone", formula: "Emotional bias", section: "port-5f" },
        ],
        formulas: [],
      },
      {
        id: "port-7",
        title: "Common traps",
        type: "reference",
        body: [`Watch for these.`],
        referenceRows: [
          { item: "Treating portfolio risk like a simple weighted average", detail: "Portfolio risk depends on the correlations between holdings, not just their individual risk levels weighted together." },
          { item: "Assuming diversification always eliminates risk", detail: "It eliminates unsystematic risk, but systematic (market-wide) risk remains no matter how diversified the portfolio is." },
          { item: "Confusing the CAL with the CML", detail: "Every CAL uses some risky portfolio; the CML is the one specific CAL that uses the market portfolio." },
          { item: "Confusing Sharpe and Treynor ratios", detail: "Sharpe uses total risk (standard deviation) — for an entire portfolio. Treynor uses only systematic risk (beta) — for one holding within a diversified portfolio." },
          { item: "Assuming willingness and ability to take risk always agree", detail: "When they conflict, the more conservative of the two generally governs the IPS's risk objective." },
          { item: "Assuming behavioral biases only affect uninformed investors", detail: "Cognitive errors and emotional biases affect even highly sophisticated investors — recognizing them is the main defense." },
        ],
        formulas: [],
      },
      {
        id: "port-8",
        title: "Addendum: Interactive Formula Mind Map",
        body: [
          `CAPM sits at the center of Portfolio Management's quantitative toolkit — it's what you use to build a portfolio in the first place, and it's the benchmark every performance ratio measures against. The map below shows that relationship directly. Click any box to see a full worked word problem.`,
        ],
        interactiveExhibit: "pmMindmap",
        formulas: [],
      },
    ],
  },
  {
    id: "ethics",
    number: "16",
    title: "Ethics and Professional Standards",
    subtitle: "The single most heavily weighted topic on the exam",
    sections: [
      {
        id: "ethics-1",
        title: "Overview",
        body: [
          `Ethics carries significant weight on the Level 1 exam and is tested throughout your career as a charterholder, not just on exam day. This chapter builds a general reasoning framework around the kinds of ethical situations investment professionals commonly face.`,
          `Important note: CFA Institute's actual Code of Ethics and Standards of Professional Conduct is the authoritative source for exam purposes, and this chapter deliberately does not reproduce that copyrighted material verbatim — it's a general framework in plain language to build your intuition. You should also read the official Code and Standards directly, ideally more than once, before exam day.`,
        ],
        formulas: [],
      },
      {
        id: "ethics-2",
        title: "Why ethics is weighted so heavily",
        body: [
          `Investment professionals are routinely trusted with other people's money, information, and financial futures. Because the potential for harm from misconduct is high, and because trust is the foundation the entire investment industry depends on, professional bodies place enormous emphasis on ethical conduct.`,
          `As a point of structure (not content — this is a factual description, not a substitute for reading the actual document): CFA Institute's Code of Ethics is organized around six broad components, and its Standards of Professional Conduct are organized into seven broad categories. This course intentionally does not reproduce that copyrighted material — the general principles below build the same underlying intuition in plain language, but the official Code and Standards remain the authoritative source for exam purposes.`,
        ],
        formulas: [],
      },
      {
        id: "ethics-2b",
        title: "GIPS: the Global Investment Performance Standards",
        body: [`GIPS is a separate but related set of voluntary ethical standards, focused specifically on how investment firms calculate and present their performance track records to prospective clients — rather than on individual professional conduct, which is the focus of the Code and Standards covered elsewhere in this chapter. GIPS exists because performance figures are relatively easy to present in a misleadingly favorable light (for example, showcasing only a firm's best-performing accounts rather than its full, composite results) — firms that voluntarily comply with GIPS commit to consistent, comparable, and fully disclosed performance reporting, giving prospective clients a fairer basis for comparing one firm's track record against another's.`],
        formulas: [],
      },
      {
        id: "ethics-3",
        title: "General principles worth internalizing",
        body: [
          `While you should study the official Code and Standards directly, these broad, commonly recognized ethical principles are worth having as a mental framework:`,
          `Client interests come first. When a professional's own interests (or an employer's interests) conflict with a client's interests, the client's interests should take priority.`,
          `Honesty and integrity in all professional dealings. This includes accurate representation of qualifications, performance, and the nature of investments.`,
          `Competence and diligence. Professionals should only offer advice within their actual expertise, and maintain that expertise over time.`,
          `Fair dealing. Clients should be treated fairly and consistently — not giving favored clients material information ahead of others.`,
          `Market integrity. Actions that could distort or manipulate market prices, or that make use of material nonpublic information, undermine the fairness of markets for everyone.`,
          `Disclosure of conflicts of interest. Where a conflict can't be avoided, it should be clearly and proactively disclosed.`,
          `Compliance with applicable laws, regulations, and professional standards — generally following the stricter of the two where they differ.`,
        ],
        formulas: [],
      },
      {
        id: "ethics-4",
        title: "A reasoning framework for ethics vignettes",
        body: [
          `Ethics questions are typically presented as short scenarios ("vignettes") describing a professional's specific situation, then ask what the professional should have done, or whether an action was appropriate. A useful approach:`,
          `First, identify who could be harmed or misled by the action described — a client, an employer, other market participants, or the integrity of the market itself.`,
          `Second, identify any conflict of interest — does the professional (or their firm) stand to benefit in a way that could compromise judgment on the client's behalf?`,
          `Third, ask whether the action was disclosed — many otherwise-permissible actions become problems specifically because they weren't disclosed.`,
          `Fourth, consider the most conservative, client-first interpretation — when in doubt, the answer that best protects client interests and market integrity is usually correct.`,
        ],
        formulas: [],
      },
      {
        id: "ethics-5",
        title: "Decision guide",
        type: "decision-guide",
        body: [`Match the vignette pattern to the likely issue.`],
        decisionRows: [
          { cue: "Recommending unsuitable products because they pay a higher commission", formula: "Client interests not prioritized / conflict of interest", section: "ethics-3" },
          { cue: "Trading ahead of a big client order for personal benefit", formula: "Fair dealing / market integrity violation", section: "ethics-3" },
          { cue: "Giving one client earlier access to research than another", formula: "Fair dealing violation", section: "ethics-3" },
          { cue: "Accepting an undisclosed gift before issuing a report on that company", formula: "Undisclosed conflict of interest", section: "ethics-3" },
          { cue: "Advising outside your actual area of expertise", formula: "Competence violation", section: "ethics-3" },
          { cue: "Exaggerating past investment performance to attract clients", formula: "Integrity / misrepresentation violation", section: "ethics-3" },
          { cue: "A firm showcasing only its best accounts, not its full track record", formula: "GIPS violation (performance presentation)", section: "ethics-2b" },
        ],
        formulas: [],
      },
    ],
  },
];

/* ============================================================
   TOPIC GROUPS — maps the 10 official CFA Institute topic areas
   to their chapters. Calculator Fundamentals is intentionally
   NOT an official CFA topic, so it's excluded from this list and
   rendered separately, above these groups, in the sidebar.
   ============================================================ */
const TOPIC_GROUPS = [
  { id: "group-quant", number: "1", title: "Quantitative Methods", chapterIds: ["tvm", "probstat", "returns", "simulation", "regression", "datascience"] },
  { id: "group-econ", number: "2", title: "Economics", chapterIds: ["econ"] },
  { id: "group-corp", number: "3", title: "Corporate Issuers", chapterIds: ["corp"] },
  { id: "group-fsa", number: "4", title: "Financial Statement Analysis", chapterIds: ["fsa"] },
  { id: "group-equity", number: "5", title: "Equity Investments", chapterIds: ["equity"] },
  { id: "group-fi", number: "6", title: "Fixed Income", chapterIds: ["fixedincome"] },
  { id: "group-deriv", number: "7", title: "Derivatives", chapterIds: ["derivatives"] },
  { id: "group-alt", number: "8", title: "Alternative Investments", chapterIds: ["altinvest"] },
  { id: "group-port", number: "9", title: "Portfolio Management", chapterIds: ["portfolio"] },
  { id: "group-ethics", number: "10", title: "Ethics and Professional Standards", chapterIds: ["ethics"] },
];

const QUIZZES = {
  calc: [
    { id: "calc-q1", question: "Which two calculator models does CFA Institute permit in the exam room?", options: ["Any calculator with a TVM function", "Texas Instruments BA II Plus and Hewlett-Packard HP 12C only", "Casio FX series and TI BA II Plus", "Any calculator without internet connectivity"], correct: 1, explanation: "Only the TI BA II Plus (and Professional) and the HP 12C (and Platinum) are permitted.", remediation: "calc-1" },
    { id: "calc-q2", question: "On the HP 12C, what does pressing ENTER actually do?", options: ["It computes the final result, like the = key", "It clears the calculator's memory", "It pushes the current number onto the stack and duplicates it", "It changes the sign of the current number"], correct: 2, explanation: "ENTER pushes and duplicates the number, freeing you to type the next value without merging the two.", remediation: "calc-4" },
    { id: "calc-q3", question: "On the HP 12C, you press: 4, ENTER, 5, +. What appears?", options: ["45", "9", "20", "An error, because there's no equals key"], correct: 1, explanation: "The stack holds [4,4] after ENTER, then [4,5] after typing 5. Pressing + pops both and pushes 9.", remediation: "calc-4" },
    { id: "calc-q4", question: "Before computing an answer on the TI BA II Plus, what should you do first if you solved a different problem a moment ago?", options: ["Nothing — the worksheet updates automatically", "Press 2ND, CLR TVM to clear the TVM worksheet", "Turn the calculator off and back on", "Reset P/Y to 12"], correct: 1, explanation: "Old TVM values left over from a prior problem are the most common source of calculator-based errors.", remediation: "calc-7" },
    { id: "calc-q5", question: "A problem states payments occur at the beginning of each year. What must you change on your calculator before solving?", options: ["Nothing, this is the default", "Switch to BEGIN/BGN mode, then switch back afterward", "Set P/Y to 1", "Change the sign of the PMT only"], correct: 1, explanation: "Annuity-due timing requires BEGIN mode — and remembering to switch back for the next (likely ordinary) problem.", remediation: "calc-7" },
    { id: "calc-q6", question: "You invest $5,000 today (an outflow). How should this be entered into the TVM worksheet?", options: ["As +5000", "As \u22125000", "It doesn't matter as long as FV is positive", "Split across N and I/Y"], correct: 1, explanation: "Money leaving your pocket is entered as negative; money you receive is entered as positive.", remediation: "calc-3" },
  ],
  tvm: [
    { id: "tvm-q1", question: "You deposit $8,000 today at 5% annual interest, compounded annually. What formula finds the value in 6 years?", options: ["PV = FV \u00F7 (1+r)<sup>n</sup>", "FV = PV \u00D7 (1+r)<sup>n</sup>", "PV = PMT \u00D7 [1 \u2212 (1+r)<sup>−n</sup>]/r", "PV = PMT / r"], correct: 1, explanation: "One deposit today, value later = single sum future value.", remediation: "tvm-3" },
    { id: "tvm-q2", question: "You will receive $20,000 in 8 years. Which formula finds what that's worth today at a 7% discount rate?", options: ["FV = PV \u00D7 (1+r)<sup>n</sup>", "PV = FV \u00F7 (1+r)<sup>n</sup>", "FV = PMT \u00D7 [((1+r)<sup>n</sup> \u2212 1)/r]", "PV = PMT/(r\u2212g)"], correct: 1, explanation: "One future amount, value today = single sum present value.", remediation: "tvm-3" },
    { id: "tvm-q3", question: "A lease requires equal payments starting immediately, at the beginning of every year for 5 years. This is:", options: ["An ordinary annuity", "An annuity due", "A perpetuity", "An uneven cash flow series"], correct: 1, explanation: "Payments at the start of each period define an annuity due.", remediation: "tvm-4" },
    { id: "tvm-q4", question: "Which is true about an annuity due compared to an otherwise identical ordinary annuity?", options: ["It is always worth less", "It is always worth more, because each payment is received one period earlier", "They are always equal in value", "The relationship depends on the payment amount"], correct: 1, explanation: "Earlier receipt of identical payments means more time to earn a return, so the due version is worth more.", remediation: "tvm-4" },
    { id: "tvm-q5", question: "A preferred stock pays a level $4 dividend per year forever, starting one year from now. Discount rate is 8%. Which formula values it today?", options: ["PV = PMT / r", "PV = PMT/(r\u2212g)", "FV = PV \u00D7 (1+r)<sup>n</sup>", "PV = \u03A3 CFt/(1+r)<sup>t</sup>"], correct: 0, explanation: "Level payment continuing forever = level perpetuity.", remediation: "tvm-5" },
    { id: "tvm-q6", question: "For a growing perpetuity formula PV = PMT1/(r\u2212g) to give a sensible answer, you need:", options: ["g > r", "g = r", "r > g", "r and g must both be zero"], correct: 2, explanation: "The discount rate must exceed the growth rate, or the series never converges to a finite value.", remediation: "tvm-5" },
    { id: "tvm-q7", question: "A project returns $1,000 in year 1, $3,000 in year 2, and $2,000 in year 3. To value this today, you should:", options: ["Use the ordinary annuity PV formula with PMT = $2,000 (the average)", "Discount each cash flow individually back to today and sum the results", "Use the perpetuity formula", "Use the single-sum PV formula on the year-3 amount only"], correct: 1, explanation: "Unequal payments have no shortcut formula — discount each one and add.", remediation: "tvm-6" },
    { id: "tvm-q8", question: "A savings account quotes 6% annual interest, compounded monthly. What do you need to compute before comparing it to a 6.1% account compounded annually?", options: ["Nothing, 6% is already comparable to 6.1%", "The effective annual rate (EAR) of the 6% account", "The perpetuity value of the account", "The annuity due adjustment"], correct: 1, explanation: "Comparing rates with different compounding frequencies requires converting to a common effective annual rate.", remediation: "tvm-2" },
    { id: "tvm-q9", question: "\"You will receive $500 at the end of every month for the next 3 years.\" This is best solved as:", options: ["A single sum, since $500 is one number", "An ordinary annuity, with rate and n converted to monthly terms", "A perpetuity, since it repeats", "An uneven cash flow series"], correct: 1, explanation: "Equal payments at regular intervals with a defined end point = ordinary annuity, using monthly rate and monthly n.", remediation: "tvm-7" },
    { id: "tvm-q10", question: "A bond pays a semiannual coupon, but you're given only the annual stated rate. Before applying any TVM formula, you should:", options: ["Use the annual rate as-is", "Convert to a periodic (semiannual) rate and double the number of periods", "Ignore compounding frequency entirely", "Apply the perpetuity formula"], correct: 1, explanation: "Rate and period frequency must match — divide the annual rate by 2 and use 2× the number of years as n.", remediation: "tvm-8" },
    { id: "tvm-q11", question: "The 1-year spot rate is 3% and the 2-year spot rate is 4%. What does the cash flow additivity / no-arbitrage principle let you calculate?", options: ["The bond's coupon rate", "The implied 1-year forward rate, one year from now", "The bond's duration", "The current yield"], correct: 1, explanation: "Two spot rates of different maturities let you back out the market's implied forward rate for the intervening period.", remediation: "tvm-6b" },
  ],
  probstat: [
    { id: "probstat-q1", question: "Two events are mutually exclusive. What is P(A and B)?", options: ["1", "0", "0.5", "Cannot be determined"], correct: 1, explanation: "Mutually exclusive events can't both happen, so their joint probability is zero.", remediation: "probstat-2" },
    { id: "probstat-q2", question: "Probability of rain is 0.3, probability of a delayed flight is 0.2, both together is 0.1. P(rain or delayed flight)?", options: ["0.5", "0.6", "0.4", "0.1"], correct: 2, explanation: "0.3 + 0.2 \u2212 0.1 = 0.4.", remediation: "probstat-2" },
    { id: "probstat-q3", question: "A fund has a 60% chance of matching the benchmark each year, independent across years. Probability of matching it 3 years running?", options: ["0.6", "0.18", "0.216", "1.8"], correct: 2, explanation: "0.6\u00B3 = 0.216.", remediation: "probstat-2" },
    { id: "probstat-q4", question: "A data set has one extreme outlier. Which measure of central tendency is least affected?", options: ["Mean", "Median", "Range", "Variance"], correct: 1, explanation: "The median is resistant to extreme outliers; the mean is pulled toward them.", remediation: "probstat-3" },
    { id: "probstat-q5", question: "Standard deviation is the square root of which measure?", options: ["Mean", "Correlation", "Variance", "Covariance"], correct: 2, explanation: "Standard deviation = \u221Avariance.", remediation: "probstat-3" },
    { id: "probstat-q6", question: "Two stocks have a correlation of \u22120.9. What does that suggest?", options: ["They move randomly with no relationship", "They tend to move strongly in opposite directions", "They always have equal returns", "One causes the other"], correct: 1, explanation: "Correlation near \u22121 means a strong opposite relationship.", remediation: "probstat-3" },
    { id: "probstat-q7", question: "Rejecting a null hypothesis that was actually true is called", options: ["A Type II error", "A Type I error", "A significance level", "A confidence interval"], correct: 1, explanation: "A Type I error is a false rejection of a true null hypothesis.", remediation: "probstat-5" },
    { id: "probstat-q8", question: "Which distribution is fully described by just its mean and standard deviation?", options: ["Any distribution", "The normal distribution", "A skewed distribution only", "None"], correct: 1, explanation: "The normal distribution is fully characterized by its mean and standard deviation.", remediation: "probstat-4" },
    { id: "probstat-q9", question: "Investment A: mean 8%, std dev 12%. Investment B: mean 20%, std dev 18%. Which has the better (lower) coefficient of variation?", options: ["Investment A (1.5)", "Investment B (0.9)", "They are equal", "Cannot be determined"], correct: 1, explanation: "CV = std dev / mean. A: 12/8=1.5. B: 18/20=0.9 — B carries less risk per unit of expected return.", remediation: "probstat-5b" },
    { id: "probstat-q10", question: "Bayes' formula is used to", options: ["Compute a simple average", "Update a probability given new information", "Test a null hypothesis", "Calculate correlation"], correct: 1, explanation: "Bayes' formula combines a prior probability with new evidence to produce an updated (posterior) probability.", remediation: "probstat-5c" },
    { id: "probstat-q11", question: "The central limit theorem states that, as sample size grows large, the distribution of the sample mean", options: ["Becomes impossible to predict", "Approaches a normal distribution, regardless of the population's own distribution shape", "Always matches the population's distribution exactly", "Becomes perfectly uniform"], correct: 1, explanation: "This is the core content of the central limit theorem, and it's what justifies using normal-distribution tools on sample means.", remediation: "probstat-5d" },
    { id: "probstat-q12", question: "A data set is heavily skewed with extreme outliers. Which type of test remains valid without requiring a normal-distribution assumption?", options: ["A parametric test", "A non-parametric test", "Neither type is usable", "Only a hypothesis test on the mean"], correct: 1, explanation: "Non-parametric tests don't require the underlying data to follow a specific distribution.", remediation: "probstat-5e" },
  ],
  returns: [
    { id: "returns-q1", question: "You buy a stock for $40, receive a $2 dividend, and sell it for $44. What is the holding period return?", options: ["10%", "15%", "12%", "6%"], correct: 1, explanation: "HPR = (44 \u2212 40 + 2) / 40 = 6/40 = 15%.", remediation: "returns-2" },
    { id: "returns-q2", question: "A required rate of return is built from which two components?", options: ["Inflation and taxes", "Risk-free rate and risk premium", "Coupon rate and yield", "Nominal rate and real rate only"], correct: 1, explanation: "Required return = risk-free rate + risk premium.", remediation: "returns-3" },
    { id: "returns-q3", question: "Which return measure is the standard for judging a portfolio manager's skill, independent of when clients added or withdrew cash?", options: ["Money-weighted rate of return", "Time-weighted rate of return", "Holding period return", "Current yield"], correct: 1, explanation: "TWRR strips out the effect of external cash flow timing, isolating the manager's actual investment performance.", remediation: "returns-4" },
    { id: "returns-q4", question: "An investor adds a large contribution right before a bad year. Compared to TWRR, their MWRR will tend to be", options: ["Higher", "Lower", "Identical", "Cannot be determined"], correct: 1, explanation: "More of the investor's dollars were exposed to the loss, dragging the dollar-weighted MWRR down more than the TWRR.", remediation: "returns-4" },
    { id: "returns-q5", question: "In a price-weighted index, a $300 stock influences the index how much compared to a $100 stock?", options: ["The same amount", "3 times as much", "1/3 as much", "It depends only on market cap"], correct: 1, explanation: "Price-weighted indexes weight purely by price, so a $300 stock has 3x the influence of a $100 stock.", remediation: "returns-5" },
    { id: "returns-q6", question: "Which index weighting method is generally considered most representative of the overall market's aggregate behavior?", options: ["Price-weighted", "Equal-weighted", "Market-capitalization-weighted", "None of these differ meaningfully"], correct: 2, explanation: "Cap-weighted indexes size each constituent's influence by total company value, generally seen as most representative.", remediation: "returns-5" },
  ],
  simulation: [
    { id: "sim-q1", question: "Which simulation method reuses actual past market data as the simulated outcomes?", options: ["Monte Carlo simulation", "Historical simulation", "Bootstrap resampling", "Regression analysis"], correct: 1, explanation: "Historical simulation directly reuses real historical data points as the simulated future outcomes.", remediation: "sim-2" },
    { id: "sim-q2", question: "Bootstrap resampling draws samples from the original data set", options: ["Without replacement, only once", "With replacement, repeatedly", "Only from the most recent data point", "Using a normal distribution assumption"], correct: 1, explanation: "Bootstrap resampling repeatedly resamples with replacement to gauge the uncertainty in a statistic.", remediation: "sim-3" },
    { id: "sim-q3", question: "Which method generates outcomes by drawing from an assumed probability distribution, rather than reusing historical data?", options: ["Historical simulation", "Bootstrap resampling", "Monte Carlo simulation", "Regression"], correct: 2, explanation: "Monte Carlo simulation draws random scenarios from an assumed distribution.", remediation: "sim-4" },
    { id: "sim-q4", question: "A key limitation of historical simulation is that it", options: ["Requires assuming a specific distribution", "Assumes the future will resemble the sampled historical period", "Cannot use any real data", "Always overstates risk"], correct: 1, explanation: "Historical simulation is only as good as the assumption that history is a reasonable guide to the future.", remediation: "sim-2" },
  ],
  regression: [
    { id: "reg-q1", question: "In Y = b0 + b1X, what does b1 represent?", options: ["The predicted value of Y when X is zero", "How much Y is predicted to change per one-unit change in X", "The correlation between X and Y", "The R\u00B2 of the model"], correct: 1, explanation: "b1 is the slope — the predicted change in Y per one-unit change in X.", remediation: "reg-2" },
    { id: "reg-q2", question: "The least squares criterion chooses the regression line that", options: ["Passes through the most data points", "Minimizes the sum of squared vertical distances between the data and the line", "Maximizes R\u00B2 only", "Has the steepest slope"], correct: 1, explanation: "Least squares minimizes the sum of squared residuals.", remediation: "reg-2" },
    { id: "reg-q3", question: "Covariance(stock, market) = 0.008, Variance(market) = 0.005. What is the regression slope (beta)?", options: ["0.625", "1.6", "0.04", "8.0"], correct: 1, explanation: "b1 = Covariance / Variance = 0.008 / 0.005 = 1.6.", remediation: "reg-2" },
    { id: "reg-q4", question: "An R\u00B2 of 0.36 means", options: ["The correlation is 0.36", "36% of Y's variation is explained by the model", "The slope is 0.36", "The model is 36% accurate on future predictions"], correct: 1, explanation: "R\u00B2 is the proportion of variation in Y explained by the regression model.", remediation: "reg-3" },
    { id: "reg-q5", question: "This chapter's regression slope calculation is the exact technique used to estimate which important Portfolio Management input?", options: ["The risk-free rate", "A stock's beta", "The Sharpe ratio", "Duration"], correct: 1, explanation: "Beta is estimated by regressing a stock's returns against market returns — the slope is the beta.", remediation: "reg-2" },
  ],
  datascience: [
    { id: "ds-q1", question: "Information like satellite imagery or credit card transaction data, outside traditional financial statements, is called", options: ["Structured data", "Alternative data", "A regression model", "A confidence interval"], correct: 1, explanation: "Alternative data refers to non-traditional data sources used in investment analysis.", remediation: "ds-2" },
    { id: "ds-q2", question: "A machine learning model trained on historical loans already labeled as defaulted or not is an example of", options: ["Unsupervised learning", "Supervised learning", "Bootstrap resampling", "Monte Carlo simulation"], correct: 1, explanation: "Supervised learning trains on data with known, labeled correct answers.", remediation: "ds-3" },
    { id: "ds-q3", question: "Clustering stocks into groups with similar behavior, without pre-labeled groups, is an example of", options: ["Supervised learning", "Unsupervised learning", "A regression model", "Historical simulation"], correct: 1, explanation: "Unsupervised learning finds patterns without pre-labeled correct answers.", remediation: "ds-3" },
    { id: "ds-q4", question: "An algorithm that builds and manages a portfolio with minimal human intervention is called a", options: ["Robo-advisor", "Bootstrap model", "Regression model", "Bayesian updater"], correct: 0, explanation: "Robo-advisors use algorithms for automated portfolio construction and management.", remediation: "ds-4" },
  ],
  econ: [
    { id: "econ-q1", question: "Price rises above equilibrium. What results?", options: ["A shortage", "A surplus", "No change", "Elasticity increases"], correct: 1, explanation: "Above equilibrium, quantity supplied exceeds quantity demanded — a surplus.", remediation: "econ-2" },
    { id: "econ-q2", question: "A 5% price increase causes only a 1% drop in quantity demanded. Demand is", options: ["Elastic", "Inelastic", "Perfectly elastic", "Undefined"], correct: 1, explanation: "A small quantity response to a price change indicates inelastic demand.", remediation: "econ-3" },
    { id: "econ-q3", question: "Many sellers, identical product, no pricing power describes", options: ["Monopoly", "Oligopoly", "Perfect competition", "Monopolistic competition"], correct: 2, explanation: "Perfect competition features many sellers of identical goods with no individual pricing power.", remediation: "econ-4" },
    { id: "econ-q4", question: "Which GDP measure adjusts for inflation?", options: ["Nominal GDP", "Real GDP", "Neither", "Both equally"], correct: 1, explanation: "Real GDP strips out the effect of price changes.", remediation: "econ-5" },
    { id: "econ-q5", question: "A central bank lowering interest rates to stimulate borrowing is an example of", options: ["Contractionary fiscal policy", "Expansionary monetary policy", "Expansionary fiscal policy", "Contractionary monetary policy"], correct: 1, explanation: "Lowering rates via the central bank is expansionary monetary policy.", remediation: "econ-6" },
    { id: "econ-q6", question: "A sustained rise in the general price level is called", options: ["Deflation", "Inflation", "Recession", "Appreciation"], correct: 1, explanation: "Inflation is a sustained rise in the general price level.", remediation: "econ-7" },
    { id: "econ-q7", question: "A country's currency weakens. What tends to happen to its exports?", options: ["They become more expensive abroad, hurting exports", "They become cheaper abroad, helping exports", "No effect", "Imports become cheaper"], correct: 1, explanation: "A weaker currency makes domestic goods cheaper for foreign buyers.", remediation: "econ-8" },
    { id: "econ-q8", question: "EUR/USD = 1.10 and GBP/USD = 1.25. What is EUR/GBP?", options: ["1.375", "0.88", "1.14", "0.72"], correct: 1, explanation: "EUR/GBP = (EUR/USD) \u00F7 (GBP/USD) = 1.10 / 1.25 = 0.88.", remediation: "econ-8b" },
    { id: "econ-q9", question: "Interest rate parity suggests that a currency with a higher interest rate than another will trade at a forward", options: ["Premium", "Discount", "Rate identical to spot", "Rate that cannot be estimated"], correct: 1, explanation: "The higher-interest-rate currency trades at a forward discount; the lower-rate currency trades at a forward premium.", remediation: "econ-8b" },
    { id: "econ-q10", question: "Strong foreign capital inflows into a country's assets generally have what effect on that country's currency?", options: ["Downward pressure (weakening)", "Upward pressure (strengthening)", "No effect", "Only affects the current account"], correct: 1, explanation: "Capital inflows increase demand for the currency, generally strengthening it.", remediation: "econ-8c" },
    { id: "econ-q11", question: "Trade disputes, sanctions, and regional conflicts affecting markets and currency values fall under which category?", options: ["Fiscal policy", "Geopolitical risk", "Monetary policy", "The business cycle"], correct: 1, explanation: "These are geopolitical risk factors, increasingly tracked as their own category.", remediation: "econ-8d" },
  ],
  fsa: [
    { id: "fsa-q1", question: "Which statement shows a snapshot at a single point in time?", options: ["The income statement", "The cash flow statement", "The balance sheet", "None of these"], correct: 2, explanation: "The balance sheet reports assets, liabilities, and equity at one point in time.", remediation: "fsa-2" },
    { id: "fsa-q2", question: "Revenue is recorded when goods are shipped on credit, before cash is received. This reflects", options: ["Cash basis accounting", "Accrual accounting / revenue recognition", "An accounting error", "Deferred tax accounting"], correct: 1, explanation: "Under accrual accounting, revenue is recognized when earned, not when cash arrives.", remediation: "fsa-3" },
    { id: "fsa-q3", question: "Current assets of $800,000 and current liabilities of $400,000 give a current ratio of", options: ["0.5", "2.0", "4.0", "1.0"], correct: 1, explanation: "800,000 / 400,000 = 2.0.", remediation: "fsa-4" },
    { id: "fsa-q4", question: "Net income of $200,000 on revenue of $2,000,000 gives a net profit margin of", options: ["20%", "2%", "10%", "5%"], correct: 2, explanation: "200,000 / 2,000,000 = 10%.", remediation: "fsa-4" },
    { id: "fsa-q5", question: "Which ratio category answers \"can this company handle its long-term debt\"?", options: ["Liquidity ratios", "Solvency ratios", "Activity ratios", "Profitability ratios"], correct: 1, explanation: "Solvency ratios assess long-term debt-paying ability.", remediation: "fsa-4" },
    { id: "fsa-q6", question: "Net income rising steadily while operating cash flow stays flat or falls is a signal of", options: ["Strong earnings quality", "Possible low quality of earnings", "Guaranteed fraud", "Nothing meaningful"], correct: 1, explanation: "A growing gap between net income and operating cash flow is a quality-of-earnings red flag.", remediation: "fsa-5" },
    { id: "fsa-q7", question: "Assets must always equal", options: ["Revenue minus expenses", "Liabilities plus equity", "Liabilities minus equity", "Equity alone"], correct: 1, explanation: "The accounting equation: Assets = Liabilities + Equity.", remediation: "fsa-2" },
    { id: "fsa-q8", question: "During a period of rising prices, which inventory method generally reports the highest cost of goods sold (and therefore the lowest profit)?", options: ["FIFO", "LIFO", "Weighted average", "They are always identical"], correct: 1, explanation: "LIFO expenses the most recently purchased (pricier, during inflation) units first, raising COGS and lowering reported profit.", remediation: "fsa-3b" },
    { id: "fsa-q9", question: "A machine costs $40,000, has a $4,000 salvage value, and a 4-year useful life. What is the annual straight-line depreciation?", options: ["$10,000", "$9,000", "$8,000", "$11,000"], correct: 1, explanation: "(40,000 \u2212 4,000) / 4 = $9,000 per year.", remediation: "fsa-3c" },
    { id: "fsa-q10", question: "Compared to straight-line, an accelerated depreciation method (like declining balance) results in", options: ["More total depreciation over the asset's life", "Less total depreciation over the asset's life", "The same total depreciation, just timed differently", "No depreciation at all"], correct: 2, explanation: "Accelerated methods only shift the timing — total depreciation over the asset's useful life is unchanged.", remediation: "fsa-3c" },
    { id: "fsa-q11", question: "A company's tax depreciation exceeds its book depreciation this year. This timing difference typically creates a", options: ["Deferred tax asset", "Deferred tax liability", "Permanent tax savings", "Reduction in revenue"], correct: 1, explanation: "Higher tax depreciation now (lower taxable income now) typically creates a deferred tax liability that reverses later.", remediation: "fsa-3d" },
    { id: "fsa-q12", question: "A pension plan that only promises to contribute a set amount today, putting investment-outcome risk on the employee, is a", options: ["Defined benefit plan", "Defined contribution plan", "A lease liability", "A deferred tax asset"], correct: 1, explanation: "A defined contribution plan shifts investment risk to the employee; a defined benefit plan keeps funding-shortfall risk with the company.", remediation: "fsa-3e" },
    { id: "fsa-q13", question: "Company A ($10M revenue, $6M COGS) and Company B ($100M revenue, $65M COGS) are compared using common-size statements. Which has the better (lower) COGS percentage?", options: ["Company A (60%)", "Company B (65%)", "They are identical", "Cannot be determined"], correct: 0, explanation: "Company A's COGS common-size is 60% (6/10), better than Company B's 65% (65/100) — despite B's larger absolute size.", remediation: "fsa-5b" },
    { id: "fsa-q14", question: "DuPont analysis breaks ROE into which three components?", options: ["Liquidity, solvency, and profitability ratios", "Net profit margin, asset turnover, and the equity multiplier (leverage)", "Revenue, expenses, and taxes", "FIFO, LIFO, and weighted average"], correct: 1, explanation: "DuPont analysis decomposes ROE into margin \u00D7 turnover \u00D7 leverage.", remediation: "fsa-5c" },
    { id: "fsa-q15", question: "Two companies have identical 18% ROE, but Company X has a much higher equity multiplier than Company Y. What does this suggest?", options: ["Company X is more profitable per sale", "Company X is relying more on leverage to achieve the same ROE", "The two companies are identical in every way", "Company X has better asset turnover"], correct: 1, explanation: "A higher equity multiplier means more of the ROE is being driven by leverage rather than operating performance.", remediation: "fsa-5c" },
    { id: "fsa-q16", question: "Diluted EPS compared to basic EPS is always", options: ["Higher", "Lower or equal", "Unrelated", "Exactly double"], correct: 1, explanation: "Diluted EPS accounts for potential additional shares, which can only spread net income more thinly — never increase EPS.", remediation: "fsa-5d" },
    { id: "fsa-q17", question: "Net income $5,000,000, preferred dividends $500,000, weighted average shares 2,000,000. What is basic EPS?", options: ["$2.50", "$2.25", "$2.75", "$2.00"], correct: 1, explanation: "(5,000,000 \u2212 500,000) / 2,000,000 = $2.25.", remediation: "fsa-5d" },
    { id: "fsa-q18", question: "Free cash flow to the firm (FCFF) represents cash available to", options: ["Common shareholders only", "Preferred shareholders only", "All capital providers, both debt and equity", "Tax authorities"], correct: 2, explanation: "FCFF is available to all capital providers combined, before splitting between debt and equity holders.", remediation: "fsa-5e" },
  ],
  corp: [
    { id: "corp-q1", question: "A project has a positive NPV. What does that suggest?", options: ["It's expected to destroy value", "It's expected to add value", "Its IRR equals zero", "It should always be rejected"], correct: 1, explanation: "Positive NPV means the project is expected to add value.", remediation: "corp-3" },
    { id: "corp-q2", question: "IRR is defined as the discount rate at which NPV equals", options: ["The cost of capital", "One", "Zero", "The initial investment"], correct: 2, explanation: "IRR is the break-even discount rate where NPV = 0.", remediation: "corp-3" },
    { id: "corp-q3", question: "Which measure blends the cost of debt and equity, weighted by their share of the capital structure?", options: ["NPV", "IRR", "WACC", "Working capital"], correct: 2, explanation: "WACC blends financing costs weighted by capital structure proportions.", remediation: "corp-4" },
    { id: "corp-q4", question: "Increasing debt relative to equity increases which financial characteristic?", options: ["Liquidity", "Leverage (and financial risk)", "Working capital", "Market efficiency"], correct: 1, explanation: "More debt relative to equity means higher leverage.", remediation: "corp-5" },
    { id: "corp-q5", question: "Current assets minus current liabilities defines", options: ["WACC", "Working capital", "NPV", "Capital structure"], correct: 1, explanation: "Working capital = current assets \u2212 current liabilities.", remediation: "corp-6" },
    { id: "corp-q6", question: "A project's IRR is below the company's cost of capital. What should generally happen?", options: ["The project should generally be accepted", "The project should generally be rejected", "It has no bearing on the decision", "The company should raise more debt"], correct: 1, explanation: "An IRR below the cost of capital means the project is expected to destroy value.", remediation: "corp-3" },
    { id: "corp-q7", question: "Compared to a shareholder's claim, a lender's claim on the company is", options: ["Residual and unlimited upside", "Fixed/contractual, and paid first", "Identical in every way", "Paid only if the company is profitable"], correct: 1, explanation: "Lenders hold a fixed contractual claim paid before shareholders; shareholders hold the residual, unlimited-upside claim.", remediation: "corp-2b" },
    { id: "corp-q8", question: "A company has NOPAT of $18 million and invested capital of $150 million. What is its ROIC?", options: ["8.3%", "12%", "18%", "6%"], correct: 1, explanation: "ROIC = 18/150 = 12%.", remediation: "corp-3" },
    { id: "corp-q9", question: "In the simplest Modigliani-Miller framework (no taxes), a company's capital structure", options: ["Determines its total value entirely", "Does not affect its total value", "Only matters for large companies", "Eliminates all financial risk"], correct: 1, explanation: "In the simplest MM framework, total firm value is unaffected by the debt/equity mix.", remediation: "corp-5" },
    { id: "corp-q10", question: "Once taxes are introduced, debt financing gains an advantage because", options: ["Dividends become tax-deductible", "Interest payments are typically tax-deductible", "Equity becomes worthless", "Working capital increases automatically"], correct: 1, explanation: "The tax-deductibility of interest creates an interest tax shield, a real benefit to debt financing.", remediation: "corp-5" },
    { id: "corp-q11", question: "Inventory outstanding 60 days, receivables 45 days, payables 30 days. What is the cash conversion cycle?", options: ["135 days", "75 days", "90 days", "15 days"], correct: 1, explanation: "CCC = 60 + 45 \u2212 30 = 75 days.", remediation: "corp-6" },
  ],
  equity: [
    { id: "equity-q1", question: "Which security type is typically paid before common shareholders but usually has no vote?", options: ["Common stock", "Preferred stock", "A bond", "A call option"], correct: 1, explanation: "Preferred stock has priority over common stock but usually no voting rights.", remediation: "equity-2" },
    { id: "equity-q2", question: "Gordon growth model requires which relationship between r and g?", options: ["g must exceed r", "r must exceed g", "r must equal g", "No relationship is required"], correct: 1, explanation: "The model only works when the required return exceeds the growth rate.", remediation: "equity-4" },
    { id: "equity-q3", question: "A stock paid a $3.00 dividend, expected to grow 5% forever, at an 11% required return. What is D1?", options: ["$3.00", "$3.05", "$3.15", "$3.30"], correct: 2, explanation: "D1 = 3.00 \u00D7 1.05 = $3.15.", remediation: "equity-4" },
    { id: "equity-q4", question: "Using that D1, what is the Gordon growth value?", options: ["$30.00", "$52.50", "$60.00", "$45.00"], correct: 1, explanation: "3.15 / (0.11 \u2212 0.05) = $52.50.", remediation: "equity-4" },
    { id: "equity-q5", question: "Price per share divided by earnings per share defines", options: ["The P/E ratio", "The current yield", "WACC", "Duration"], correct: 0, explanation: "P/E = price per share \u00F7 earnings per share.", remediation: "equity-5" },
    { id: "equity-q6", question: "The idea that stock prices already reflect available information describes", options: ["The Gordon growth model", "The efficient market hypothesis", "Comparative advantage", "Duration"], correct: 1, explanation: "The efficient market hypothesis describes prices reflecting available information.", remediation: "equity-6" },
    { id: "equity-q7", question: "An investor buys a stock at $80 using 60% initial margin, with a 30% maintenance margin. What is the approximate margin call price?", options: ["$60.00", "$45.71", "$52.50", "$24.00"], correct: 1, explanation: "80 \u00D7 [(1\u22120.60)/(1\u22120.30)] = 80 \u00D7 (0.40/0.70) \u2248 $45.71.", remediation: "equity-3" },
    { id: "equity-q8", question: "A young, fast-growing company is expected to slow to a stable growth rate in several years. Which valuation approach fits best?", options: ["Single-stage Gordon growth model", "Two-stage dividend discount model", "P/E ratio only", "Margin call formula"], correct: 1, explanation: "A two-stage DDM handles a growth rate that shifts over time, unlike the single-stage model.", remediation: "equity-4b" },
    { id: "equity-q9", question: "A company generates strong free cash flow but pays little to no dividend. Valuing it with a plain dividend discount model would likely", options: ["Overvalue it", "Undervalue it", "Have no effect on the valuation", "Only work for bonds"], correct: 1, explanation: "DDM only captures actual payouts; FCFE captures the company's true cash-generating capacity even without dividends.", remediation: "equity-4b" },
    { id: "equity-q10", question: "EV/EBITDA is often preferred over P/E when comparing companies with", options: ["Identical capital structures", "Very different debt levels", "The same industry only", "No earnings at all"], correct: 1, explanation: "Enterprise value captures both debt and equity claims, sidestepping leverage differences that distort P/E.", remediation: "equity-5" },
    { id: "equity-q11", question: "Porter's five forces framework assesses", options: ["A single company's financial statements", "Industry structure and competitive intensity", "A bond's credit rating", "Currency exchange rates"], correct: 1, explanation: "Porter's five forces evaluates the competitive intensity and attractiveness of an industry.", remediation: "equity-5b" },
  ],
  fixedincome: [
    { id: "fi-q1", question: "A bond's coupon rate is below the current market yield. Its price will be", options: ["Above face value (a premium)", "Below face value (a discount)", "Exactly at face value", "Cannot be determined"], correct: 1, explanation: "When yield exceeds the coupon rate, the bond trades at a discount.", remediation: "fi-3" },
    { id: "fi-q2", question: "Bond prices and yields move", options: ["In the same direction", "In opposite directions", "Independently of each other", "Only during recessions"], correct: 1, explanation: "Bond prices and yields always move in opposite directions.", remediation: "fi-3" },
    { id: "fi-q3", question: "The discount rate that makes a bond's PV of cash flows equal its current price is called", options: ["The coupon rate", "The current yield", "Yield to maturity", "Duration"], correct: 2, explanation: "Yield to maturity is that exact discount rate.", remediation: "fi-4" },
    { id: "fi-q4", question: "An upward-sloping yield curve generally reflects", options: ["Lower yields demanded for longer maturities", "Higher yields demanded for longer maturities", "No relationship between yield and maturity", "An imminent recession"], correct: 1, explanation: "Normal yield curves slope upward, reflecting compensation for longer maturities.", remediation: "fi-5" },
    { id: "fi-q5", question: "All else equal, a bond with a lower coupon rate will have", options: ["Lower duration", "Higher duration", "The same duration as any other bond", "No measurable duration"], correct: 1, explanation: "Lower coupons mean more value sits further out in time, raising duration.", remediation: "fi-6" },
    { id: "fi-q6", question: "Risk that a bond issuer fails to make payments is called", options: ["Duration risk", "Credit risk", "Reinvestment risk", "Currency risk"], correct: 1, explanation: "Credit risk is the risk of issuer default.", remediation: "fi-7" },
    { id: "fi-q7", question: "A $1,000 face value bond with a 5% coupon and 2 years to maturity, market yield 5% \u2014 is the price above, below, or at face value?", options: ["Above face value", "Below face value", "At face value", "Cannot be determined"], correct: 2, explanation: "When the coupon rate equals the market yield, the bond prices at exactly face value.", remediation: "fi-3" },
    { id: "fi-q8", question: "A bond pays no periodic coupons and is sold below face value, repaying full face value at maturity. This is a", options: ["Floating-rate bond", "Zero-coupon bond", "Convertible bond", "Putable bond"], correct: 1, explanation: "A zero-coupon bond has no periodic interest — the return comes entirely from the price discount.", remediation: "fi-2b" },
    { id: "fi-q9", question: "A bond trades below its face value. This is called a", options: ["Par bond", "Premium bond", "Discount bond", "Zero-coupon bond"], correct: 2, explanation: "A bond priced below face value is a discount bond, which happens when the coupon rate is below the market yield.", remediation: "fi-3b" },
    { id: "fi-q10", question: "A bond has a $50 annual coupon and currently trades at $952. What is its current yield (approximately)?", options: ["5.0%", "5.25%", "4.8%", "10.5%"], correct: 1, explanation: "Current yield = 50 / 952 \u2248 5.25%.", remediation: "fi-4" },
    { id: "fi-q11", question: "A bond trades between coupon dates. The quoted price plus accrued interest equals the", options: ["Clean price", "Par value", "Dirty (invoice) price", "Current yield"], correct: 2, explanation: "The dirty price is the clean price plus accrued interest — what the buyer actually pays.", remediation: "fi-4b" },
    { id: "fi-q12", question: "A bond has a duration of 6. Market yields fall by 1 percentage point (0.01). Approximately how much does the price change?", options: ["-6%", "+6%", "-0.06%", "+0.6%"], correct: 1, explanation: "% change in price \u2248 \u22126 \u00D7 (\u22120.01) = +6% — falling yields raise price.", remediation: "fi-6" },
    { id: "fi-q13", question: "Which embedded bond feature gives the issuer the right to redeem the bond early?", options: ["Putable", "Convertible", "Callable", "Floating-rate"], correct: 2, explanation: "A callable bond gives the issuer the right to redeem early, typically to refinance at lower rates.", remediation: "fi-6b" },
    { id: "fi-q14", question: "A zero-coupon bond's Macaulay duration equals", options: ["Half its maturity", "Its maturity exactly", "Zero", "Its modified duration times its yield"], correct: 1, explanation: "With only one cash flow at maturity, Macaulay duration equals the bond's maturity exactly.", remediation: "fi-6" },
    { id: "fi-q15", question: "A bond has Macaulay duration of 6 years and a periodic yield of 5%. What is its modified duration?", options: ["6.30", "5.71", "6.00", "5.00"], correct: 1, explanation: "Modified duration = 6 / 1.05 \u2248 5.71.", remediation: "fi-6" },
    { id: "fi-q16", question: "For an ordinary, option-free bond with positive convexity, the duration-only price estimate tends to", options: ["Overstate gains and understate losses", "Understate gains and overstate losses", "Be perfectly accurate", "Only apply to zero-coupon bonds"], correct: 1, explanation: "Positive convexity means the bond gains more than duration alone predicts and loses less — duration-only estimates understate gains and overstate losses.", remediation: "fi-6a2" },
    { id: "fi-q17", question: "A bond backed by a pool of auto loans or credit card receivables (rather than mortgages) is best described as", options: ["A mortgage-backed security (MBS)", "An asset-backed security (ABS)", "A zero-coupon bond", "A putable bond"], correct: 1, explanation: "MBS specifically refers to mortgage-backed pools; ABS is the broader category covering other loan types.", remediation: "fi-6c" },
    { id: "fi-q18", question: "Homeowners refinancing and paying off mortgages early, right when rates have fallen, creates which risk for MBS investors?", options: ["Credit risk", "Prepayment risk", "Currency risk", "Convexity"], correct: 1, explanation: "Prepayment risk returns principal early, right when reinvesting at an equally attractive rate is hardest.", remediation: "fi-6c" },
  ],
  derivatives: [
    { id: "deriv-q1", question: "Which derivative type standardizes the contract and trades it on an exchange?", options: ["Forward", "Futures", "Swap", "A private loan"], correct: 1, explanation: "Futures are standardized, exchange-traded contracts.", remediation: "deriv-2" },
    { id: "deriv-q2", question: "A contract giving the right, but not the obligation, to buy at a set price is", options: ["A forward", "A call option", "A put option", "A swap"], correct: 1, explanation: "A call option gives the right to buy.", remediation: "deriv-3" },
    { id: "deriv-q3", question: "An option buyer's maximum possible loss is", options: ["Unlimited", "The premium paid", "The strike price", "Twice the premium"], correct: 1, explanation: "An option buyer can never lose more than the premium paid.", remediation: "deriv-3" },
    { id: "deriv-q4", question: "An agreement to exchange a fixed interest rate for a floating rate over time is", options: ["A forward", "A futures contract", "An interest rate swap", "A call option"], correct: 2, explanation: "This describes an interest rate swap.", remediation: "deriv-4" },
    { id: "deriv-q5", question: "A farmer locking in a future selling price to protect against falling prices is engaging in", options: ["Speculation", "Hedging", "Arbitrage", "Leverage"], correct: 1, explanation: "Reducing an existing risk is hedging.", remediation: "deriv-5" },
    { id: "deriv-q6", question: "Which derivative type carries an obligation for both parties, privately negotiated (not exchange-traded)?", options: ["Futures", "Option", "Forward", "None of these"], correct: 2, explanation: "A forward is a private, bilateral obligation.", remediation: "deriv-2" },
    { id: "deriv-q7", question: "A call option has a $40 strike and the stock trades at $55. What is the option's intrinsic value?", options: ["$0", "$15", "$40", "$55"], correct: 1, explanation: "Intrinsic value of a call = stock price \u2212 strike = 55 \u2212 40 = $15.", remediation: "deriv-3b" },
    { id: "deriv-q8", question: "As an option approaches expiration, its time value tends to", options: ["Increase", "Shrink toward zero", "Stay constant", "Become negative"], correct: 1, explanation: "Time decay causes time value to shrink as expiration approaches.", remediation: "deriv-3b" },
    { id: "deriv-q9", question: "Put-call parity links which four things together?", options: ["Duration, convexity, yield, and price", "Call price, put price, strike price, and stock price", "Beta, alpha, Sharpe ratio, and Treynor ratio", "FIFO, LIFO, weighted average, and COGS"], correct: 1, explanation: "Put-call parity is a fixed no-arbitrage relationship between these four values.", remediation: "deriv-3c" },
    { id: "deriv-q10", question: "According to the cost of carry model, a dividend paid on the underlying stock (a carry benefit) should make the no-arbitrage forward price", options: ["Higher", "Lower", "Unaffected", "Equal to the spot price exactly"], correct: 1, explanation: "Carry benefits like dividends reduce the forward price, since a forward buyer forgoes them.", remediation: "deriv-3d" },
    { id: "deriv-q11", question: "The one-period binomial option pricing model assumes", options: ["Infinitely many possible future prices", "Exactly two possible future outcomes (up or down)", "The stock price cannot change", "No connection to no-arbitrage principles"], correct: 1, explanation: "The binomial model simplifies to two possible outcomes per period, using no-arbitrage logic to price the option.", remediation: "deriv-3e" },
  ],
  altinvest: [
    { id: "alt-q1", question: "A pooled fund using leverage and short-selling across flexible strategies is a", options: ["Mutual fund", "Hedge fund", "REIT", "Government bond fund"], correct: 1, explanation: "Hedge funds use flexible strategies including leverage and short-selling.", remediation: "alt-2" },
    { id: "alt-q2", question: "An ownership stake in a company not listed on a public exchange describes", options: ["Common stock", "Private equity / venture capital", "A REIT", "A commodity"], correct: 1, explanation: "Private equity/venture capital involves stakes in non-listed companies.", remediation: "alt-2" },
    { id: "alt-q3", question: "Physical goods like oil or gold are most commonly accessed through", options: ["Common stock", "Futures contracts (commodities)", "Preferred stock", "Bonds"], correct: 1, explanation: "Commodities are typically accessed via futures contracts.", remediation: "alt-2" },
    { id: "alt-q4", question: "Which shared characteristic often lets alternative investments improve a portfolio's risk-return profile?", options: ["Higher fees", "Lower correlation with traditional markets", "Greater transparency", "Guaranteed higher returns"], correct: 1, explanation: "Lower correlation with traditional assets can improve diversification.", remediation: "alt-3" },
    { id: "alt-q5", question: "Extra expected return demanded for tying up money in a hard-to-sell investment is called", options: ["A credit spread", "An illiquidity premium", "A dividend yield", "A coupon"], correct: 1, explanation: "This is the illiquidity premium.", remediation: "alt-3" },
    { id: "alt-q6", question: "Toll roads, airports, and utilities fall under which category?", options: ["Hedge funds", "Private equity", "Infrastructure", "Commodities"], correct: 2, explanation: "These are examples of infrastructure investments.", remediation: "alt-2" },
    { id: "alt-q7", question: "In a \"2 and 20\" hedge fund fee structure, the \"20\" refers to", options: ["A 20% annual management fee", "A 20% performance fee on profits earned", "A 20-year lockup period", "A 20% minimum required return"], correct: 1, explanation: "The 20 refers to a 20% performance fee charged on profits.", remediation: "alt-2b" },
    { id: "alt-q8", question: "A high-water mark ensures that a hedge fund", options: ["Cannot lose money for investors", "Cannot charge a performance fee on gains that merely recover a prior loss", "Must always beat the S&P 500", "Charges no management fee at all"], correct: 1, explanation: "The high-water mark requires the fund to exceed its prior peak value before charging new performance fees.", remediation: "alt-2b" },
    { id: "alt-q9", question: "A fund investing in early-stage, pre-profitable companies in exchange for equity is engaged in", options: ["Private debt", "Venture capital", "A leveraged buyout", "Infrastructure investing"], correct: 1, explanation: "Venture capital specifically targets early-stage, often pre-profitable companies.", remediation: "alt-2c" },
    { id: "alt-q10", question: "Compared to private equity, private debt generally occupies which position in a company's capital structure?", options: ["A junior, residual ownership position", "A more senior lending position", "An identical position", "No position at all"], correct: 1, explanation: "Private debt involves lending (a more senior claim) rather than taking an ownership stake.", remediation: "alt-2c" },
    { id: "alt-q11", question: "Which investment characteristic is particularly associated with digital assets, compared to traditional alternatives?", options: ["A very long, well-established historical track record", "Extremely high price volatility and evolving regulatory treatment", "Guaranteed low correlation with all other assets", "No valuation uncertainty at all"], correct: 1, explanation: "Digital assets are notable for high volatility, a short track record, and still-developing regulation.", remediation: "alt-3b" },
  ],
  portfolio: [
    { id: "port-q1", question: "A portfolio is 70% Stock A (12% expected return) and 30% Stock B (5% expected return). Expected portfolio return?", options: ["8.5%", "9.9%", "12%", "17%"], correct: 1, explanation: "0.70\u00D712% + 0.30\u00D75% = 9.9%.", remediation: "port-3" },
    { id: "port-q2", question: "Two stocks have a correlation of +1. Combining them provides", options: ["Full diversification benefit", "No diversification benefit", "Negative returns", "Guaranteed risk elimination"], correct: 1, explanation: "Perfectly correlated assets move together and provide no diversification benefit.", remediation: "port-4" },
    { id: "port-q3", question: "The lower the correlation between two holdings, the", options: ["Smaller the diversification benefit", "Greater the diversification benefit", "Higher the expected return", "Lower the expected return"], correct: 1, explanation: "Lower correlation generally means greater diversification benefit.", remediation: "port-4" },
    { id: "port-q4", question: "The set of portfolios offering the highest return for each level of risk is called", options: ["The capital allocation line", "The efficient frontier", "The yield curve", "WACC"], correct: 1, explanation: "This defines the efficient frontier.", remediation: "port-5" },
    { id: "port-q5", question: "Adding a risk-free asset to the optimal risky portfolio creates", options: ["The efficient frontier", "The capital allocation line", "A hedge fund", "A yield curve"], correct: 1, explanation: "This defines the capital allocation line.", remediation: "port-5" },
    { id: "port-q6", question: "Is portfolio risk generally a simple weighted average of the individual holdings' risks?", options: ["Yes, always", "No — it also depends on the correlations between the holdings", "Only for bonds", "Only for two-asset portfolios"], correct: 1, explanation: "Portfolio risk depends on correlations, not just weighted individual risks.", remediation: "port-3" },
    { id: "port-q7", question: "Which type of risk can diversification eliminate?", options: ["Systematic risk", "Unsystematic (firm-specific) risk", "Both equally", "Neither"], correct: 1, explanation: "Unsystematic risk is diversifiable; systematic risk affects the whole market and cannot be diversified away.", remediation: "port-5b" },
    { id: "port-q8", question: "Risk-free rate is 3%, expected market return is 8%, and a stock has a beta of 1.2. What does CAPM predict for its required return?", options: ["8%", "9%", "11%", "6%"], correct: 1, explanation: "E(Ri) = 3% + 1.2\u00D7(8%\u22123%) = 3% + 6% = 9%.", remediation: "port-5c" },
    { id: "port-q9", question: "On the security market line, an asset priced above the line is considered", options: ["Overvalued", "Undervalued", "Fairly valued", "Riskless"], correct: 1, explanation: "A point above the SML offers more return than its systematic risk (beta) justifies — undervalued according to CAPM.", remediation: "port-5c" },
    { id: "port-q10", question: "Which performance ratio uses total risk (standard deviation) rather than just systematic risk?", options: ["Treynor ratio", "Sharpe ratio", "Jensen's alpha", "Beta"], correct: 1, explanation: "The Sharpe ratio divides excess return by standard deviation (total risk).", remediation: "port-5d" },
    { id: "port-q11", question: "A portfolio's actual return exceeds what CAPM would have predicted for its level of beta. This is captured by a positive", options: ["Sharpe ratio", "Treynor ratio", "Jensen's alpha", "Coefficient of variation"], correct: 2, explanation: "Jensen's alpha measures return earned above or below the CAPM-predicted return.", remediation: "port-5d" },
    { id: "port-q12", question: "An investor's psychological comfort with volatility is their", options: ["Ability to take risk", "Willingness to take risk", "Required return", "Risk-free rate"], correct: 1, explanation: "Willingness to take risk is the psychological/attitudinal side; ability to take risk is the financial-capacity side.", remediation: "port-5e" },
    { id: "port-q13", question: "An investor holds onto a losing stock far too long because the pain of realizing the loss feels worse than an equivalent gain would feel good. This describes", options: ["Confirmation bias", "Anchoring", "Loss aversion", "The Sharpe ratio"], correct: 2, explanation: "Loss aversion is an emotional bias where losses are felt more intensely than equivalent gains.", remediation: "port-5f" },
    { id: "port-q14", question: "Shifting a risk to an insurance company rather than retaining it is an example of which risk management response?", options: ["Avoiding the risk", "Reducing the risk", "Transferring the risk", "Accepting the risk"], correct: 2, explanation: "Transferring risk means shifting it to another party, such as through insurance.", remediation: "port-5g" },
  ],
  ethics: [
    { id: "ethics-q1", question: "When a professional's interests conflict with a client's, whose interest should generally take priority?", options: ["The professional's", "The employer's", "The client's", "Whichever is most profitable"], correct: 2, explanation: "Client interests should generally take priority.", remediation: "ethics-3" },
    { id: "ethics-q2", question: "A professional recommends a product mainly because it pays a higher commission, despite a better-suited alternative existing. This most likely violates which principle?", options: ["Competence", "Client interests coming first / avoiding conflicts of interest", "Market integrity only", "None of these"], correct: 1, explanation: "This is a classic conflict-of-interest and client-priority violation.", remediation: "ethics-3" },
    { id: "ethics-q3", question: "Giving one client earlier access to the same research than another client violates which principle?", options: ["Competence", "Fair dealing", "Market integrity only", "Disclosure of gifts"], correct: 1, explanation: "Unequal access to information violates fair dealing.", remediation: "ethics-3" },
    { id: "ethics-q4", question: "A professional accepts an undisclosed gift from a company before issuing a report on it. What's the core issue?", options: ["Nothing, gifts are always fine", "An undisclosed conflict of interest", "A market integrity violation only", "A competence violation"], correct: 1, explanation: "The core issue is the undisclosed conflict of interest.", remediation: "ethics-3" },
    { id: "ethics-q5", question: "When in doubt between two plausible answers on an ethics vignette, which is usually the safer choice?", options: ["The one that benefits the professional most", "The one that most protects client interests and market integrity", "The one requiring the least disclosure", "Either, since ethics questions have no clear answer"], correct: 1, explanation: "The most client-protective, market-integrity-preserving answer is usually correct.", remediation: "ethics-4" },
    { id: "ethics-q6", question: "What is the authoritative source for the actual Code of Ethics and Standards of Professional Conduct?", options: ["This app's chapter summary", "Any third-party study guide", "CFA Institute's official published Code and Standards", "None — it's not formally codified"], correct: 2, explanation: "Always defer to CFA Institute's official published Code and Standards.", remediation: "ethics-1" },
    { id: "ethics-q7", question: "CFA Institute's Standards of Professional Conduct are organized into how many broad categories?", options: ["Five", "Six", "Seven", "Ten"], correct: 2, explanation: "The Standards of Professional Conduct are organized into seven broad categories.", remediation: "ethics-2" },
    { id: "ethics-q8", question: "GIPS primarily addresses which topic?", options: ["Individual professional conduct", "How investment firms calculate and present performance track records", "Corporate governance", "Bond credit ratings"], correct: 1, explanation: "GIPS is a voluntary standard specifically for consistent, comparable performance presentation.", remediation: "ethics-2b" },
    { id: "ethics-q9", question: "A firm showcasing only its best-performing accounts, rather than its full composite results, to a prospective client is a concern GIPS was created to address. This is best described as a", options: ["Fair dealing violation", "Misleading performance presentation", "Conflict of interest only", "Not a concern at all, since firms may present anything"], correct: 1, explanation: "GIPS exists precisely to prevent this kind of selective, misleadingly favorable performance presentation.", remediation: "ethics-2b" },
  ],
};

/* ============================================================
   SUPABASE CLIENT + AUTH
   ============================================================ */
let sb = null;
try {
  sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
} catch (e) {
  console.error("Supabase client failed to initialize. Check supabase-config.js.", e);
}

let currentUser = null;
let completed = [];
let quizStats = {};

/* ============================================================
   APP STATE + NAVIGATION
   ============================================================ */
let view = "reading";
let chapterId = "calc";
let sectionId = "calc-1";
let expandedChapter = "calc";
let expandedGroup = null;

function findLocation(sectionId) {
  for (const ch of CHAPTERS) {
    const s = ch.sections.find((s) => s.id === sectionId);
    if (s) return { chapter: ch, section: s };
  }
  return null;
}

function groupIdForChapter(chId) {
  const g = TOPIC_GROUPS.find((g) => g.chapterIds.includes(chId));
  return g ? g.id : null;
}

function goTo(chId, secId) {
  chapterId = chId;
  sectionId = secId;
  expandedChapter = chId;
  expandedGroup = groupIdForChapter(chId);
  view = "reading";
  renderAll();
}

function goToQuiz(chId) {
  chapterId = chId;
  expandedChapter = chId;
  expandedGroup = groupIdForChapter(chId);
  view = "quiz";
  renderAll();
}

function goToDashboard() {
  view = "dashboard";
  renderAll();
}

/* ============================================================
   PROGRESS SYNC (Supabase)
   ============================================================ */
async function loadProgress() {
  if (!currentUser) return;
  const { data, error } = await sb.from("progress").select("*").eq("user_id", currentUser.id).maybeSingle();
  if (error) {
    console.error("Failed to load progress:", error);
    return;
  }
  if (data) {
    completed = data.completed_sections || [];
    quizStats = data.quiz_stats || {};
  } else {
    completed = [];
    quizStats = {};
    await sb.from("progress").insert({ user_id: currentUser.id, completed_sections: [], quiz_stats: {} });
  }
}

async function saveProgress() {
  if (!currentUser) return;
  const { error } = await sb.from("progress").upsert({
    user_id: currentUser.id,
    completed_sections: completed,
    quiz_stats: quizStats,
    updated_at: new Date().toISOString(),
  });
  if (error) console.error("Failed to save progress:", error);
}

function markComplete(secId) {
  if (!completed.includes(secId)) {
    completed.push(secId);
    saveProgress();
  }
}

function recordQuizAnswer(questionId, isCorrect, remediation) {
  const existing = quizStats[questionId] || { attempts: 0, misses: 0 };
  quizStats[questionId] = {
    attempts: existing.attempts + 1,
    misses: existing.misses + (isCorrect ? 0 : 1),
    lastCorrect: isCorrect,
    remediation,
  };
  saveProgress();
}

/* ============================================================
   RENDER: SIDEBAR
   ============================================================ */
function renderSectionsAndQuiz(ch) {
  let html = `<div class="nav-sections">`;
  ch.sections.forEach((s) => {
    const active = view === "reading" && sectionId === s.id ? " active" : "";
    html += `<div class="nav-section${active}" data-chapter="${ch.id}" data-section="${s.id}">
      <span class="nav-check">${completed.includes(s.id) ? "&#10003;" : ""}</span>${s.title}
    </div>`;
  });
  html += `</div><div class="nav-quiz" data-quizchapter="${ch.id}">Take ${ch.title} quiz</div>`;
  return html;
}

function renderChapterBlock(ch, nested) {
  let html = `<div class="nav-chapter${nested ? " nested" : ""}">
    <div class="nav-chapter-head" data-chapter="${ch.id}">
      <span class="nav-chapter-title">${ch.title}</span>
    </div>`;
  if (expandedChapter === ch.id) html += renderSectionsAndQuiz(ch);
  html += `</div>`;
  return html;
}

function renderSidebar() {
  const el = document.getElementById("sidebar");
  let html = `<div class="sidebar-brand">CFA <span>Level I</span> Study Ledger</div>`;
  html += `<div class="sidebar-account"><span>${currentUser ? currentUser.email : ""}</span><button id="signout-btn">Sign out</button></div>`;

  const calc = CHAPTERS.find((c) => c.id === "calc");
  html += `<div class="nav-section-label">Before you begin</div>`;
  html += renderChapterBlock(calc, false);

  html += `<div class="nav-section-label">CFA Level I Curriculum</div>`;
  TOPIC_GROUPS.forEach((g) => {
    const groupActive = expandedGroup === g.id;
    html += `<div class="nav-group">
      <div class="nav-group-head${groupActive ? " active" : ""}" data-group="${g.id}">
        <span class="nav-group-num">${g.number}</span><span class="nav-group-title">${g.title}</span>
      </div>`;
    if (groupActive) {
      if (g.chapterIds.length === 1) {
        const ch = CHAPTERS.find((c) => c.id === g.chapterIds[0]);
        html += `<div class="nav-chapter nested-direct">${renderSectionsAndQuiz(ch)}</div>`;
      } else {
        g.chapterIds.forEach((cid) => {
          const ch = CHAPTERS.find((c) => c.id === cid);
          html += renderChapterBlock(ch, true);
        });
      }
    }
    html += `</div>`;
  });

  html += `<div class="nav-dashboard" id="dash-link">&#9670; Dashboard</div>`;
  el.innerHTML = html;

  el.querySelectorAll(".nav-group-head").forEach((n) =>
    n.addEventListener("click", () => {
      expandedGroup = expandedGroup === n.dataset.group ? null : n.dataset.group;
      renderSidebar();
    })
  );
  el.querySelectorAll(".nav-chapter-head").forEach((n) =>
    n.addEventListener("click", () => {
      expandedChapter = expandedChapter === n.dataset.chapter ? null : n.dataset.chapter;
      renderSidebar();
    })
  );
  el.querySelectorAll(".nav-section").forEach((n) =>
    n.addEventListener("click", () => goTo(n.dataset.chapter, n.dataset.section))
  );
  el.querySelectorAll(".nav-quiz").forEach((n) =>
    n.addEventListener("click", () => goToQuiz(n.dataset.quizchapter))
  );
  document.getElementById("dash-link").addEventListener("click", goToDashboard);
  const signoutBtn = document.getElementById("signout-btn");
  if (signoutBtn) signoutBtn.addEventListener("click", handleSignOut);
}

/* ============================================================
   RENDER: READING VIEW
   ============================================================ */
function renderReading() {
  const chapter = CHAPTERS.find((c) => c.id === chapterId);
  const section = chapter.sections.find((s) => s.id === sectionId);
  markComplete(section.id);

  const idx = chapter.sections.findIndex((s) => s.id === section.id);
  const prev = chapter.sections[idx - 1];
  const next = chapter.sections[idx + 1];

  let html = `<div class="eyebrow">Chapter ${chapter.number} &middot; ${chapter.title}</div>`;
  html += `<h2 class="section-title">${section.title}</h2>`;

  section.body.forEach((p, i) => {
    html += `<p class="body-text">${p}</p>`;
    const ex = (section.exhibits || []).find((e) => e.afterParagraph === i);
    if (ex) {
      html += `<div class="exhibit">${ex.svg}</div>`;
    }
  });

  if (section.formulas && section.formulas.length) {
    section.formulas.forEach((f) => {
      const isAdv = f.name.toLowerCase().includes("advanced");
      const givenHtml = f.given && f.given.length
        ? `<div class="led-given"><div class="led-given-title">Given</div>${f.given.map((g) => `<div class="led-given-line">${g}</div>`).join("")}</div>`
        : "";
      html += `<span class="led-tag ${isAdv ? "advanced" : "basic"}">${isAdv ? "Advanced" : "Basic"}</span>
        <div class="led">
          <div class="led-name">${f.name}</div>
          ${givenHtml}
          <div class="led-expr">${f.expression}</div>
          <div class="led-when">${f.when}</div>
          ${f.worked ? `<div class="led-worked"><strong>Calculation:</strong> ${f.worked}</div>` : ""}
        </div>
        ${f.workedExhibit ? `<div class="exhibit">${f.workedExhibit}</div>` : ""}`;
    });
  }

  if (section.type === "reference" && section.referenceRows) {
    html += `<table class="ref-table"><tbody>`;
    section.referenceRows.forEach((r) => {
      html += `<tr><td>${r.item}</td><td>${r.detail}</td></tr>`;
    });
    html += `</tbody></table>`;
  }

  if (section.type === "decision-guide" && section.decisionRows) {
    html += `<table class="guide-table"><tbody>`;
    section.decisionRows.forEach((r) => {
      html += `<tr><td>${r.cue}</td><td>${r.formula}<br/><span class="guide-link" data-goto="${r.section}">Jump to formula &#8594;</span></td></tr>`;
    });
    html += `</tbody></table>`;
  }

  if (section.interactiveExhibit === "rpnStepper") {
    html += `<div class="exhibit" id="rpn-stepper-mount"></div>`;
  }
  if (section.interactiveExhibit === "tvmMindmap") {
    html += `<div class="exhibit" id="tvm-mindmap-mount"></div>`;
  }
  if (section.interactiveExhibit === "fiMindmap") {
    html += `<div class="exhibit" id="fi-mindmap-mount"></div>`;
  }
  if (section.interactiveExhibit === "pmMindmap") {
    html += `<div class="exhibit" id="pm-mindmap-mount"></div>`;
  }
  if (section.interactiveExhibit === "fsaMindmap") {
    html += `<div class="exhibit" id="fsa-mindmap-mount"></div>`;
  }

  html += `<div class="nav-buttons">`;
  html += prev ? `<button class="btn btn-ghost" data-navprev="${prev.id}">&#8592; ${prev.title}</button>` : `<span></span>`;
  html += next ? `<button class="btn btn-primary" data-navnext="${next.id}">Next: ${next.title} &#8594;</button>` : `<span></span>`;
  html += `</div>`;

  const main = document.getElementById("main");
  main.innerHTML = html;

  main.querySelectorAll("[data-goto]").forEach((n) => n.addEventListener("click", () => goTo(chapterId, n.dataset.goto)));
  const prevBtn = main.querySelector("[data-navprev]");
  if (prevBtn) prevBtn.addEventListener("click", () => goTo(chapterId, prevBtn.dataset.navprev));
  const nextBtn = main.querySelector("[data-navnext]");
  if (nextBtn) nextBtn.addEventListener("click", () => goTo(chapterId, nextBtn.dataset.navnext));

  if (section.interactiveExhibit === "rpnStepper") mountRpnStepper();
  if (section.interactiveExhibit === "tvmMindmap") mountTVMMindmap();
  if (section.interactiveExhibit === "fiMindmap") mountFixedIncomeMindmap();
  if (section.interactiveExhibit === "pmMindmap") mountPortfolioMindmap();
  if (section.interactiveExhibit === "fsaMindmap") mountFSAMindmap();
  renderSidebar();
}

/* ============================================================
   RPN STACK STEPPER (interactive exhibit)
   ============================================================ */
function mountRpnStepper() {
  const steps = [
    { key: "4", stack: [4] },
    { key: "ENTER", stack: [4, 4] },
    { key: "2", stack: [4, 2] },
    { key: "+", stack: [6] },
    { key: "7", stack: [6, 7] },
    { key: "ENTER", stack: [6, 7, 7] },
    { key: "3", stack: [6, 7, 3] },
    { key: "\u2212", stack: [6, 4] },
    { key: "\u00D7", stack: [24] },
  ];
  let idx = 0;
  const mount = document.getElementById("rpn-stepper-mount");
  if (!mount) return;

  function render() {
    const s = steps[idx];
    let stackHtml = "";
    s.stack.forEach((v, i) => {
      const isTop = i === s.stack.length - 1;
      stackHtml += `<div class="stack-box${isTop ? " top" : ""}">${v}</div>`;
    });
    let dotsHtml = "";
    steps.forEach((_, i) => {
      dotsHtml += `<span class="stepper-dot${i === idx ? " active" : ""}"></span>`;
    });
    mount.innerHTML = `
      <div style="text-align:center;font-size:12.5px;color:var(--ink-soft);margin-bottom:14px;">
        Step ${idx + 1} of ${steps.length} &middot; Computing (4+2)&#215;(7&#8722;3)
      </div>
      <div class="stepper-wrap">
        <div class="stepper-col">
          <div class="stepper-label">Key pressed</div>
          <div class="key-display">${s.key}</div>
        </div>
        <div class="stepper-col">
          <div class="stepper-label">Stack (top = active register)</div>
          <div class="stack-display">${stackHtml}</div>
        </div>
      </div>
      <div class="stepper-dots">${dotsHtml}</div>
      <div class="stepper-controls">
        <button class="btn btn-ghost" id="rpn-prev" ${idx === 0 ? "disabled" : ""}>Previous</button>
        <button class="btn btn-primary" id="rpn-next">${idx === steps.length - 1 ? "Restart" : "Next"}</button>
      </div>
    `;
    document.getElementById("rpn-prev").addEventListener("click", () => { if (idx > 0) { idx--; render(); } });
    document.getElementById("rpn-next").addEventListener("click", () => { if (idx < steps.length - 1) idx++; else idx = 0; render(); });
  }
  render();
}

/* ============================================================
   TVM FORMULA MIND MAP (interactive exhibit)
   ============================================================ */
const TVM_MINDMAP_EXAMPLES = {
  "pv-single": { title: "Single Sum — Present Value", problem: "You will inherit $50,000 in 8 years. At a 6% discount rate, what is that inheritance worth today?", given: ["FV = $50,000", "r = 0.06", "n = 8"], formula: "PV = FV / (1+r)^n", calc: "PV = 50,000 / (1.06)^8\nPV = 50,000 / 1.5938\nPV \u2248 $31,371" },
  "pv-ordinary": { title: "Ordinary Annuity — Present Value", problem: "A structured settlement pays $2,000 at the end of each year for 10 years. At a 5% discount rate, what is the settlement worth today?", given: ["PMT = $2,000", "r = 0.05", "n = 10"], formula: "PV = PMT \u00D7 [1 \u2212 (1+r)^\u2212n] / r", calc: "PV = 2,000 \u00D7 [1\u2212(1.05)^\u221210] / 0.05\nPV = 2,000 \u00D7 7.7217\nPV \u2248 $15,443" },
  "pv-due": { title: "Annuity Due — Present Value", problem: "A lease requires $1,500 payments at the beginning of each year for 5 years. At a 4% rate, what is the lease worth today?", given: ["PMT = $1,500", "r = 0.04", "n = 5"], formula: "PVdue = PVordinary \u00D7 (1+r)", calc: "PV(ordinary) = 1,500\u00D7[1\u2212(1.04)^\u22125]/0.04 \u2248 $6,678\nPV(due) = 6,678 \u00D7 1.04 \u2248 $6,945\n\n(about $267 more, since every payment\nlands one period earlier)" },
  "pv-perpetuity": { title: "Perpetuity — Present Value", problem: "A preferred stock pays a level $5 dividend forever, starting next year, at an 8% required return. What is it worth today?", given: ["PMT = $5", "r = 0.08"], formula: "PV = PMT / r", calc: "PV = 5 / 0.08\nPV = $62.50" },
  "pv-growing": { title: "Growing Perpetuity — Present Value", problem: "A stock's next dividend is expected to be $3, growing 4% annually forever, at a 10% required return. What is its value today?", given: ["PMT1 = $3", "r = 0.10", "g = 0.04"], formula: "PV = PMT1 / (r \u2212 g)", calc: "PV = 3 / (0.10\u22120.04)\nPV = 3 / 0.06\nPV = $50.00" },
  "pv-uneven": { title: "Uneven Cash Flows — Present Value", problem: "A project returns $4,000 in year 1, $6,000 in year 2, and $3,000 in year 3, at a 7% discount rate. What is its present value?", given: ["CF1 = $4,000", "CF2 = $6,000", "CF3 = $3,000", "r = 0.07"], formula: "PV = \u03A3 CFt / (1+r)^t", calc: "PV = 4,000/(1.07)^1 + 6,000/(1.07)^2 + 3,000/(1.07)^3\nPV \u2248 3,738 + 5,241 + 2,449\nPV \u2248 $11,428" },
  "fv-single": { title: "Single Sum — Future Value", problem: "You deposit $8,000 today at 5.5% annual interest for 12 years. What will it grow to?", given: ["PV = $8,000", "r = 0.055", "n = 12"], formula: "FV = PV \u00D7 (1+r)^n", calc: "FV = 8,000 \u00D7 (1.055)^12\nFV \u2248 8,000 \u00D7 1.898\nFV \u2248 $15,184" },
  "fv-ordinary": { title: "Ordinary Annuity — Future Value", problem: "You contribute $3,000 to a retirement account at the end of each year for 20 years, earning 7%. What is the account worth at the end?", given: ["PMT = $3,000", "r = 0.07", "n = 20"], formula: "FV = PMT \u00D7 [(1+r)^n \u2212 1] / r", calc: "FV = 3,000\u00D7[(1.07)^20\u22121]/0.07\nFV \u2248 3,000 \u00D7 40.995\nFV \u2248 $122,986" },
  "fv-due": { title: "Annuity Due — Future Value", problem: "Same contributions as before ($3,000/year, 20 years, 7%), but made at the beginning of each year instead. What is the account worth?", given: ["FVordinary = $122,986 (from the example above)", "r = 0.07"], formula: "FVdue = FVordinary \u00D7 (1+r)", calc: "FV(due) = 122,986 \u00D7 1.07\nFV(due) \u2248 $131,595\n\n(about $8,609 more, just from each deposit\nhaving one extra year to grow)" },
  "rate-implied": { title: "Implied Return / Yield", problem: "A zero-coupon bond costs $700 today and pays $1,000 in 5 years. What annual return (yield) does it offer?", given: ["PV = $700", "FV = $1,000", "n = 5"], formula: "PV = FV / (1+r)^n, solve for r", calc: "700 = 1,000 / (1+r)^5\n(1+r)^5 = 1,000/700 = 1.4286\n1+r = 1.4286^(1/5) \u2248 1.0739\nr \u2248 7.39%\n\n(same idea as YTM in Fixed Income, or IRR\nin Corporate Issuers \u2014 solving for the rate)" },
  "solve-n": { title: "Solving for n", problem: "You invest $5,000 today at 8% annual interest. How many years will it take to double to $10,000?", given: ["PV = $5,000", "FV = $10,000", "r = 0.08"], formula: "FV = PV \u00D7 (1+r)^n, solve for n", calc: "10,000 = 5,000 \u00D7 (1.08)^n\n2 = (1.08)^n\nn = ln(2) / ln(1.08)\nn \u2248 9.0 years\n\n(Rule of 72 estimate: 72/8 = 9 years \u2014 matches)" },
  "solve-pmt": { title: "Solving for PMT", problem: "You want to have $200,000 in 25 years for retirement, earning 7% annually. How much must you deposit at the end of each year?", given: ["FV = $200,000", "r = 0.07", "n = 25"], formula: "FV = PMT \u00D7 [(1+r)^n \u2212 1] / r, solve for PMT", calc: "200,000 = PMT \u00D7 [(1.07)^25\u22121]/0.07\n200,000 = PMT \u00D7 63.249\nPMT \u2248 $3,162 per year" },
  "rate-ear": { title: "Effective Annual Rate", problem: "A credit card quotes 24% annual interest, compounded monthly. What is the effective annual rate?", given: ["rstated = 0.24", "m = 12"], formula: "EAR = (1 + r/m)^m \u2212 1", calc: "EAR = (1+0.24/12)^12 \u2212 1\nEAR = (1.02)^12 \u2212 1\nEAR \u2248 26.82%" },
  "rate-continuous": { title: "Continuous Compounding", problem: "A bank offers 6% interest compounded continuously. What is the effective annual rate?", given: ["rstated = 0.06"], formula: "EAR = e^r \u2212 1", calc: "EAR = e^0.06 \u2212 1\nEAR \u2248 6.18%" },
  "rate-periodic": { title: "Periodic Rate", problem: "A loan's stated annual rate is 9%, compounded monthly. What periodic (monthly) rate should you use in a TVM calculation?", given: ["rstated = 0.09", "m = 12"], formula: "Periodic rate = r / m", calc: "Periodic rate = 9% / 12\nPeriodic rate = 0.75% per month" },
  "freq-monthly": { title: "Monthly vs. Annual Payments", problem: "You want to accumulate $50,000 in 6 years by making equal monthly deposits, earning 6% annual interest compounded monthly. What n and r do you use before applying the FV annuity formula?", given: ["Goal (FV) = $50,000", "Term = 6 years", "rstated = 0.06", "m = 12"], formula: "n = years \u00D7 m, r = rstated / m", calc: "n = 6 \u00D7 12 = 72 months\nr = 6% / 12 = 0.5% per month\n\nThen solve 50,000 = PMT\u00D7[(1.005)^72\u22121]/0.005\nfor the required monthly deposit." },
  "freq-beginning": { title: "Beginning vs. End of Period", problem: "Two rent contracts each require $1,000/month for 3 years at 6% annual (0.5% monthly). Contract A pays at the start of each month; Contract B pays at the end. Which is worth more today, and by how much?", given: ["PMT = $1,000/month", "n = 36 months", "r = 0.005/month"], formula: "PVdue = PVordinary \u00D7 (1+r)", calc: "PV(B, ordinary) = 1,000\u00D7[1\u2212(1.005)^\u221236]/0.005 \u2248 $32,871\nPV(A, due) = 32,871 \u00D7 1.005 \u2248 $33,035\n\nContract A is worth about $164 more \u2014\nsame payments, one period earlier throughout." },
  "freq-semiannual": { title: "Semiannual / Quarterly Compounding", problem: "A bond pays semiannual coupons at a stated annual rate of 8%, and has 5 years to maturity. What n and r should you use to find its price?", given: ["Term = 5 years", "rstated = 0.08", "m = 2 (semiannual)"], formula: "n = years \u00D7 m, r = rstated / m", calc: "n = 5 \u00D7 2 = 10 periods\nr = 8% / 2 = 4% per period\n\nThen apply the bond pricing formula\n(PV of coupon annuity + PV of face value)\nusing these converted values." },
  "value-bond": { title: "Valuing a Bond", problem: "A $1,000 face value bond pays a 5% annual coupon and matures in 4 years. The market requires a 7% yield. What is the bond's price?", given: ["Face value = $1,000", "Coupon = $50/year (5%)", "n = 4", "r = 0.07"], formula: "Price = PV(coupon annuity) + PV(face value)", calc: "PV(coupons) = 50\u00D7[1\u2212(1.07)^\u22124]/0.07 \u2248 $169.36\nPV(face) = 1,000/(1.07)^4 \u2248 $762.90\nPrice \u2248 169.36 + 762.90 \u2248 $932.26\n\n(a discount bond \u2014 the 5% coupon is below\nthe 7% market yield)" },
  "value-stock": { title: "Valuing a Stock (Dividend Discount Model)", problem: "A stock just paid a $1.80 dividend, expected to grow 3% forever. At a 9% required return, what is the stock worth today?", given: ["D0 = $1.80 (just paid)", "g = 0.03", "r = 0.09"], formula: "V0 = D1 / (r \u2212 g)", calc: "D1 = 1.80 \u00D7 1.03 = $1.854\nV0 = 1.854 / (0.09\u22120.03)\nV0 \u2248 $30.90\n\n(the exact same growing perpetuity formula\nfrom the PV branch \u2014 just applied to a stock)" },
  "forward-implied": { title: "Implied Forward Rate", problem: "The 1-year spot rate is 3% and the 2-year spot rate is 4.5%. What 1-year rate is implied for the period starting one year from now?", given: ["S1 = 0.03 (1-year spot rate)", "S2 = 0.045 (2-year spot rate)"], formula: "(1+S1) \u00D7 (1+f) = (1+S2)^2", calc: "(1.03) \u00D7 (1+f) = (1.045)^2 = 1.092\n1+f = 1.092 / 1.03 \u2248 1.0602\nf \u2248 6.02%\n\n(from no-arbitrage: two 1-year investments\nback-to-back must earn the same total return\nas one 2-year investment)" },
};

function showTVMExample(id) {
  const d = TVM_MINDMAP_EXAMPLES[id];
  if (!d) return;
  renderMindmapDetail("mm", d);
  document.querySelectorAll(".mm-leaf-group").forEach((el) => el.classList.remove("selected"));
  document.getElementById("mm-grp-" + id).classList.add("selected");
}

function mountTVMMindmap() {
  const mount = document.getElementById("tvm-mindmap-mount");
  if (!mount) return;
  mount.innerHTML = EXHIBIT_TVM_MINDMAP_SVG;
}

/* ---- shared renderer for Given/Formula/Calculation detail panels ---- */
function renderMindmapDetail(prefix, d) {
  document.getElementById(prefix + "-detail-title").textContent = d.title;
  document.getElementById(prefix + "-detail-problem").textContent = d.problem;
  document.getElementById(prefix + "-detail-given").textContent = d.given.join("\n");
  document.getElementById(prefix + "-detail-formula").textContent = d.formula;
  document.getElementById(prefix + "-detail-solution").textContent = d.calc;
  document.getElementById(prefix + "-detail-panel").classList.add("visible");
  const ph = document.getElementById(prefix + "-placeholder");
  if (ph) ph.style.display = "none";
}

/* ---- Fixed Income mind map ---- */
const FI_MINDMAP_EXAMPLES = {
  "coupon-bond": { title: "Pricing a Coupon Bond", problem: "A $1,000 face value bond pays a 6% annual coupon and matures in 3 years. The market requires an 8% yield. What is the bond's price?", given: ["Face value = $1,000", "Coupon = $60/year (6%)", "n = 3", "r = 0.08"], formula: "Price = PV(coupon annuity) + PV(face value)", calc: "PV(coupons) \u2248 $154.63\nPV(face value) \u2248 $793.83\nPrice \u2248 154.63 + 793.83\nPrice \u2248 $948.46" },
  "zero-coupon": { title: "Pricing a Zero-Coupon Bond", problem: "A $1,000 face value zero-coupon bond matures in 5 years. The market yield is 6%. What is its price?", given: ["Face value = $1,000", "r = 0.06", "n = 5"], formula: "Price = Face value / (1+r)^n", calc: "Price = 1,000 / (1.06)^5\nPrice \u2248 1,000 / 1.3382\nPrice \u2248 $747.26" },
  "current-yield": { title: "Current Yield", problem: "A bond with a $60 annual coupon currently trades at $948. What is its current yield?", given: ["Annual coupon = $60", "Current price = $948"], formula: "Current yield = Annual coupon / Current price", calc: "Current yield = 60 / 948\nCurrent yield \u2248 6.33%" },
  "accrued-interest": { title: "Accrued Interest", problem: "A bond pays a $60 annual coupon (360-day convention), and it has been 90 days since the last coupon payment. The quoted (clean) price is $980. What is the dirty price?", given: ["Annual coupon = $60", "Days since last coupon = 90", "Days in coupon period = 360", "Clean price = $980"], formula: "Accrued interest = Annual coupon \u00D7 (days since / days in period)", calc: "Accrued interest = 60 \u00D7 (90/360) = $15\nDirty price = 980 + 15\nDirty price = $995" },
  "modified-duration": { title: "Modified Duration", problem: "A bond has a Macaulay duration of 4.5 years and a periodic (annual) yield of 6%. What is its modified duration?", given: ["Macaulay duration = 4.5 years", "Periodic yield = 0.06"], formula: "Modified duration = Macaulay duration / (1 + periodic yield)", calc: "Modified duration = 4.5 / 1.06\nModified duration \u2248 4.25" },
  "duration-price": { title: "Price Change from Duration", problem: "A bond has a modified duration of 7, and market yields rise by 0.50 percentage points. Estimate the price change.", given: ["Modified duration = 7", "\u0394y = 0.005 (+0.50 pp)"], formula: "% change in price \u2248 \u2212 Modified duration \u00D7 \u0394y", calc: "% change \u2248 \u22127 \u00D7 0.005\n% change \u2248 \u22123.5%" },
  "duration-convexity": { title: "Duration + Convexity Adjustment", problem: "A bond has modified duration of 7, convexity of 65, and yields rise by 2 percentage points. Estimate the price change including convexity.", given: ["Modified duration = 7", "Convexity = 65", "\u0394y = 0.02 (+2 pp)"], formula: "% change \u2248 [\u2212Dur \u00D7 \u0394y] + [\u00BD \u00D7 Convexity \u00D7 (\u0394y)^2]", calc: "Duration-only: \u22127 \u00D7 0.02 = \u221214%\nConvexity adj.: \u00BD \u00D7 65 \u00D7 0.0004 \u2248 +1.3%\n\nCombined: \u221214% + 1.3% = \u221212.7%" },
};
function showFIExample(id) {
  const d = FI_MINDMAP_EXAMPLES[id];
  if (!d) return;
  renderMindmapDetail("fi-mm", d);
  document.querySelectorAll(".fi-mm-leaf-group").forEach((el) => el.classList.remove("selected"));
  document.getElementById("fi-mm-grp-" + id).classList.add("selected");
}
function mountFixedIncomeMindmap() {
  const mount = document.getElementById("fi-mindmap-mount");
  if (!mount) return;
  mount.innerHTML = EXHIBIT_FI_MINDMAP_SVG;
}

/* ---- Portfolio Management mind map ---- */
const PM_MINDMAP_EXAMPLES = {
  "capm": { title: "CAPM Required Return", problem: "The risk-free rate is 3%, the expected market return is 9%, and a stock has a beta of 1.4. What return does CAPM require?", given: ["Rf = 3%", "E(Rm) = 9%", "\u03B2i = 1.4"], formula: "E(Ri) = Rf + \u03B2i \u00D7 [E(Rm) \u2212 Rf]", calc: "E(Ri) = 3% + 1.4 \u00D7 (9%\u22123%)\nE(Ri) = 3% + 8.4%\nE(Ri) = 11.4%" },
  "port-return": { title: "Portfolio Expected Return", problem: "A portfolio is 60% Stock A (10% expected return) and 40% Stock B (6% expected return). What is the portfolio's expected return?", given: ["wA = 0.60, E(RA) = 10%", "wB = 0.40, E(RB) = 6%"], formula: "E(Rp) = \u03A3 [wi \u00D7 E(Ri)]", calc: "E(Rp) = (0.60\u00D710%) + (0.40\u00D76%)\nE(Rp) = 6% + 2.4%\nE(Rp) = 8.4%" },
  "min-var": { title: "Minimum-Variance Weight", problem: "Stock 1 has variance 0.04, Stock 2 has variance 0.09, and their covariance is 0.02. What weight in Stock 1 minimizes portfolio variance?", given: ["\u03C31\u00B2 = 0.04", "\u03C32\u00B2 = 0.09", "Cov(1,2) = 0.02"], formula: "w1 = (\u03C32\u00B2 \u2212 Cov) / (\u03C31\u00B2 + \u03C32\u00B2 \u2212 2\u00D7Cov)", calc: "w1 = (0.09\u22120.02) / (0.04+0.09\u22120.04)\nw1 = 0.07 / 0.09\nw1 \u2248 77.8%" },
  "sharpe": { title: "Sharpe Ratio", problem: "A portfolio returns 11%, the risk-free rate is 3%, and the portfolio's standard deviation is 16%. What is its Sharpe ratio?", given: ["Rp = 11%", "Rf = 3%", "\u03C3p = 16%"], formula: "Sharpe = (Rp \u2212 Rf) / \u03C3p", calc: "Sharpe = (11%\u22123%) / 16%\nSharpe = 8/16\nSharpe = 0.50" },
  "treynor": { title: "Treynor Ratio", problem: "The same portfolio returns 11%, the risk-free rate is 3%, and its beta is 1.2. What is its Treynor ratio?", given: ["Rp = 11%", "Rf = 3%", "\u03B2p = 1.2"], formula: "Treynor = (Rp \u2212 Rf) / \u03B2p", calc: "Treynor = (11%\u22123%) / 1.2\nTreynor = 8/1.2\nTreynor \u2248 6.67" },
  "jensen": { title: "Jensen's Alpha", problem: "The same portfolio returns 11%, has a beta of 1.2, the risk-free rate is 3%, and the market return is 9%. What is its Jensen's alpha?", given: ["Rp = 11%", "\u03B2p = 1.2", "Rf = 3%", "Rm = 9%"], formula: "\u03B1p = Rp \u2212 [Rf + \u03B2p \u00D7 (Rm \u2212 Rf)]", calc: "CAPM-predicted = 3% + 1.2\u00D76% = 10.2%\n\n\u03B1p = 11% \u2212 10.2%\n\u03B1p = 0.8%" },
};
function showPMExample(id) {
  const d = PM_MINDMAP_EXAMPLES[id];
  if (!d) return;
  renderMindmapDetail("pm-mm", d);
  document.querySelectorAll(".pm-mm-leaf-group").forEach((el) => el.classList.remove("selected"));
  document.getElementById("pm-mm-grp-" + id).classList.add("selected");
}
function mountPortfolioMindmap() {
  const mount = document.getElementById("pm-mindmap-mount");
  if (!mount) return;
  mount.innerHTML = EXHIBIT_PM_MINDMAP_SVG;
}

/* ---- FSA mind map ---- */
const FSA_MINDMAP_EXAMPLES = {
  "dupont": { title: "DuPont Analysis (ROE Decomposition)", problem: "A company has a 6% net profit margin, an asset turnover of 1.5, and an equity multiplier of 2.0. What is its ROE?", given: ["Net profit margin = 6%", "Asset turnover = 1.5", "Equity multiplier = 2.0"], formula: "ROE = Margin \u00D7 Turnover \u00D7 Equity multiplier", calc: "ROE = 6% \u00D7 1.5 \u00D7 2.0\nROE = 18%" },
  "current-ratio": { title: "Current Ratio", problem: "A company has current assets of $500,000 and current liabilities of $250,000. What is its current ratio?", given: ["Current assets = $500,000", "Current liabilities = $250,000"], formula: "Current ratio = Current assets / Current liabilities", calc: "Current ratio = 500,000 / 250,000\nCurrent ratio = 2.0" },
  "debt-equity": { title: "Debt-to-Equity Ratio", problem: "A company has total debt of $3 million and total equity of $2 million. What is its debt-to-equity ratio?", given: ["Total debt = $3,000,000", "Total equity = $2,000,000"], formula: "Debt-to-equity = Total debt / Total equity", calc: "Debt-to-equity = 3,000,000 / 2,000,000\nDebt-to-equity = 1.5" },
  "net-margin": { title: "Net Profit Margin", problem: "A company has net income of $400,000 on revenue of $5,000,000. What is its net profit margin?", given: ["Net income = $400,000", "Revenue = $5,000,000"], formula: "Net profit margin = Net income / Revenue", calc: "Net profit margin = 400,000 / 5,000,000\nNet profit margin = 8%" },
  "inv-turnover": { title: "Inventory Turnover", problem: "A company has cost of goods sold of $2,000,000 and average inventory of $400,000. What is its inventory turnover?", given: ["COGS = $2,000,000", "Average inventory = $400,000"], formula: "Inventory turnover = COGS / Average inventory", calc: "Inventory turnover = 2,000,000 / 400,000\nInventory turnover = 5 times per year" },
  "common-size": { title: "Common-Size Percentage", problem: "Company A has $10 million revenue and $6 million cost of goods sold. What is its COGS common-size percentage?", given: ["Revenue = $10,000,000", "COGS = $6,000,000"], formula: "Common-size % = Line item / Total revenue", calc: "COGS % = 6,000,000 / 10,000,000\nCOGS % = 60%" },
  "eps": { title: "Basic Earnings Per Share", problem: "A company has net income of $5,000,000, pays $500,000 in preferred dividends, and has a weighted average of 2,000,000 common shares outstanding. What is basic EPS?", given: ["Net income = $5,000,000", "Preferred dividends = $500,000", "Weighted avg. shares = 2,000,000"], formula: "Basic EPS = (Net income \u2212 Preferred dividends) / Weighted avg. shares", calc: "Basic EPS = (5,000,000\u2212500,000) / 2,000,000\nBasic EPS = 4,500,000 / 2,000,000\nBasic EPS = $2.25" },
  "fcff": { title: "Free Cash Flow to the Firm", problem: "A company has net income of $2,000,000, non-cash depreciation of $400,000, interest expense of $300,000, a 25% tax rate, capital expenditures of $600,000, and a $100,000 increase in working capital. What is FCFF?", given: ["Net income = $2,000,000", "Non-cash depreciation = $400,000", "Interest expense = $300,000", "Tax rate = 0.25", "CapEx = $600,000", "\u0394 Working capital = $100,000"], formula: "FCFF = NI + Non-cash + Interest\u00D7(1\u2212tax) \u2212 CapEx \u2212 \u0394WC", calc: "FCFF = 2,000,000+400,000+225,000\u2212600,000\u2212100,000\nFCFF = $1,925,000" },
};
function showFSAExample(id) {
  const d = FSA_MINDMAP_EXAMPLES[id];
  if (!d) return;
  renderMindmapDetail("fsa-mm", d);
  document.querySelectorAll(".fsa-mm-leaf-group").forEach((el) => el.classList.remove("selected"));
  document.getElementById("fsa-mm-grp-" + id).classList.add("selected");
}
function mountFSAMindmap() {
  const mount = document.getElementById("fsa-mindmap-mount");
  if (!mount) return;
  mount.innerHTML = EXHIBIT_FSA_MINDMAP_SVG;
}

/* ============================================================
   RENDER: QUIZ VIEW
   ============================================================ */
let quizIdx = 0;
let quizSelected = null;
let quizScore = 0;
let quizDone = false;

function renderQuiz() {
  const chapter = CHAPTERS.find((c) => c.id === chapterId);
  const quiz = QUIZZES[chapterId];
  const main = document.getElementById("main");

  if (quizDone) {
    const pct = Math.round((quizScore / quiz.length) * 100);
    main.innerHTML = `
      <div class="quiz-card quiz-summary">
        <div class="eyebrow">${chapter.title} quiz complete</div>
        <div class="score">${pct}%</div>
        <p class="body-text">${quizScore} of ${quiz.length} correct. Missed concepts are waiting for you on the dashboard.</p>
        <button class="btn btn-primary" id="retake-btn">Retake quiz</button>
      </div>`;
    document.getElementById("retake-btn").addEventListener("click", () => {
      quizIdx = 0; quizSelected = null; quizScore = 0; quizDone = false; renderQuiz();
    });
    renderSidebar();
    return;
  }

  const q = quiz[quizIdx];
  let html = `<div class="quiz-card">
    <div class="quiz-progress">QUESTION ${quizIdx + 1} / ${quiz.length} &mdash; ${chapter.title.toUpperCase()}</div>
    <div class="quiz-q">${q.question}</div>`;
  q.options.forEach((opt, i) => {
    let cls = "quiz-opt";
    if (quizSelected !== null) {
      cls += " disabled";
      if (i === q.correct) cls += " correct";
      else if (i === quizSelected) cls += " incorrect";
    }
    html += `<button class="${cls}" data-opt="${i}" ${quizSelected !== null ? "disabled" : ""}>${opt}</button>`;
  });
  if (quizSelected !== null) {
    html += `<div class="quiz-feedback ${quizSelected === q.correct ? "correct" : "incorrect"}">
      ${quizSelected === q.correct ? "Correct. " : "Not quite. "}${q.explanation}<br/>
      <span class="review-btn" id="review-btn">Review where this was introduced &#8594;</span>
    </div>
    <button class="btn btn-primary" style="margin-top:16px" id="next-q-btn">${quizIdx + 1 >= quiz.length ? "See results" : "Next question"}</button>`;
  }
  html += `</div>`;
  main.innerHTML = html;

  if (quizSelected === null) {
    main.querySelectorAll("[data-opt]").forEach((btn) =>
      btn.addEventListener("click", () => {
        quizSelected = parseInt(btn.dataset.opt, 10);
        const isCorrect = quizSelected === q.correct;
        if (isCorrect) quizScore++;
        recordQuizAnswer(q.id, isCorrect, q.remediation);
        renderQuiz();
      })
    );
  } else {
    document.getElementById("review-btn").addEventListener("click", () => goTo(chapterId, q.remediation));
    document.getElementById("next-q-btn").addEventListener("click", () => {
      if (quizIdx + 1 >= quiz.length) quizDone = true;
      else { quizIdx++; quizSelected = null; }
      renderQuiz();
    });
  }
  renderSidebar();
}

/* ============================================================
   RENDER: DASHBOARD
   ============================================================ */
function renderDashboard() {
  const totalSections = CHAPTERS.reduce((sum, c) => sum + c.sections.length, 0);
  const readPct = Math.round((completed.length / totalSections) * 100);
  const allQuestions = [...QUIZZES.calc, ...QUIZZES.tvm];
  const attempted = allQuestions.filter((q) => quizStats[q.id]);
  const correctCount = attempted.filter((q) => quizStats[q.id].lastCorrect).length;
  const accuracy = attempted.length ? Math.round((correctCount / attempted.length) * 100) : 0;
  const weakSpots = allQuestions.filter((q) => quizStats[q.id] && quizStats[q.id].misses > 0);

  let html = `<div class="eyebrow">Your progress</div>
    <h1 class="title">Dashboard</h1>
    <p class="subtitle">Reading progress, quiz accuracy, and concepts worth another pass.</p>
    <div class="dash-grid">
      <div class="dash-card"><div class="label">Sections read</div><div class="value">${readPct}% <span style="font-size:14px;color:var(--ink-soft)">(${completed.length}/${totalSections})</span></div></div>
      <div class="dash-card"><div class="label">Quiz accuracy</div><div class="value">${attempted.length ? accuracy + "%" : "—"} <span style="font-size:14px;color:var(--ink-soft)">(${attempted.length} answered)</span></div></div>
    </div>
    <h2 class="section-title" style="font-size:18px">Weak spots</h2>`;

  if (weakSpots.length === 0) {
    html += `<p class="body-text" style="color:var(--ink-soft)">Nothing flagged yet — missed quiz questions will show up here so you can jump straight back to the concept.</p>`;
  } else {
    weakSpots.forEach((q) => {
      const loc = findLocation(quizStats[q.id].remediation);
      html += `<div class="weak-row">
        <div><div>${q.question}</div><div class="tag">Missed ${quizStats[q.id].misses}&times; &middot; ${loc ? loc.chapter.title + " — " + loc.section.title : ""}</div></div>
        <button class="btn btn-ghost" data-goto-chapter="${loc.chapter.id}" data-goto-section="${loc.section.id}">Review</button>
      </div>`;
    });
  }
  const main = document.getElementById("main");
  main.innerHTML = html;
  main.querySelectorAll("[data-goto-chapter]").forEach((btn) =>
    btn.addEventListener("click", () => goTo(btn.dataset.gotoChapter, btn.dataset.gotoSection))
  );
  renderSidebar();
}

function renderAll() {
  if (view === "reading") renderReading();
  else if (view === "quiz") renderQuiz();
  else if (view === "dashboard") renderDashboard();
}

/* ============================================================
   AUTH SCREEN
   ============================================================ */
let authMode = "signin";

function renderAuthScreen() {
  const el = document.getElementById("auth-screen");
  el.innerHTML = `
    <div class="auth-card">
      <h1 class="serif">CFA Level I Study Ledger</h1>
      <p class="sub">${authMode === "signin" ? "Sign in to continue" : "Create an account to get started"}</p>
      <div class="auth-error" id="auth-error"></div>
      <input type="email" id="auth-email" placeholder="Email" autocomplete="email" />
      <input type="password" id="auth-password" placeholder="Password (min 6 characters)" autocomplete="${authMode === "signin" ? "current-password" : "new-password"}" />
      <button id="auth-submit">${authMode === "signin" ? "Sign in" : "Sign up"}</button>
      <div class="auth-toggle">
        ${authMode === "signin" ? "New here? <a id=\"auth-toggle-link\">Create an account</a>" : "Already have an account? <a id=\"auth-toggle-link\">Sign in</a>"}
      </div>
    </div>`;
  document.getElementById("auth-toggle-link").addEventListener("click", () => {
    authMode = authMode === "signin" ? "signup" : "signin";
    renderAuthScreen();
  });
  document.getElementById("auth-submit").addEventListener("click", handleAuthSubmit);
  el.querySelectorAll("input").forEach((inp) =>
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter") handleAuthSubmit(); })
  );
}

async function handleAuthSubmit() {
  const email = document.getElementById("auth-email").value.trim();
  const password = document.getElementById("auth-password").value;
  const errEl = document.getElementById("auth-error");
  errEl.textContent = "";
  if (!email || !password) { errEl.textContent = "Enter an email and password."; return; }

  if (authMode === "signup") {
    const { data, error } = await sb.auth.signUp({ email, password });
    if (error) { errEl.textContent = error.message; return; }
    if (data.session) { await onSignedIn(data.session); }
    else { errEl.textContent = "Check your email to confirm your account, then sign in."; }
  } else {
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) { errEl.textContent = error.message; return; }
    await onSignedIn(data.session);
  }
}

async function handleSignOut() {
  await sb.auth.signOut();
  currentUser = null;
  document.getElementById("app-shell").classList.remove("visible");
  document.getElementById("auth-screen").style.display = "flex";
  authMode = "signin";
  renderAuthScreen();
}

async function onSignedIn(session) {
  currentUser = session.user;
  await loadProgress();
  document.getElementById("auth-screen").style.display = "none";
  document.getElementById("app-shell").classList.add("visible");
  renderAll();
}

/* ============================================================
   BOOT
   ============================================================ */
async function boot() {
  if (!sb) {
    document.getElementById("auth-screen").innerHTML = `<div class="auth-card"><h1 class="serif">Setup needed</h1><p class="sub">This app can't connect to Supabase yet. Edit supabase-config.js with your project URL and anon key, then reload.</p></div>`;
    return;
  }
  const { data } = await sb.auth.getSession();
  if (data.session) {
    await onSignedIn(data.session);
  } else {
    renderAuthScreen();
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((e) => console.error("SW registration failed:", e));
  });
}

boot();
