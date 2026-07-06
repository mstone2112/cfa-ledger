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
    subtitle: "The single idea underneath bonds, equities, and corporate finance",
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
          { id: "tvm-2-ear", name: "Effective annual rate (EAR)", expression: "EAR = (1 + rstated/m)^m \u2212 1", when: "Use whenever you need a true annual return to compare two investments that compound at different frequencies.", worked: "A bank quotes 8% annual interest, compounded quarterly (m = 4). EAR = (1 + 0.08/4)^4 \u2212 1 = (1.02)^4 \u2212 1 \u2248 8.24%. Notice this is higher than the quoted 8%, because quarterly compounding lets you earn interest on interest four times a year.", workedExhibit: EXHIBIT_WORKED_EAR },
          { id: "tvm-2-ear-cont", name: "EAR with continuous compounding — advanced", expression: "EAR = e^(rstated) \u2212 1", when: "Rare on Level 1; appears when a problem explicitly says \"continuously compounded.\"", worked: "The same 8% rate compounded continuously: EAR = e^0.08 \u2212 1 \u2248 8.33% \u2014 slightly higher still, since continuous compounding is the limiting case of ever-more-frequent compounding." },
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
          { id: "tvm-3-fv", name: "Future value of a single sum", expression: "FV = PV \u00D7 (1 + r)^n", when: "Wording cue: \"invest/deposit a lump sum today... worth in the future.\"", worked: "You deposit $5,000 today at 6% annual interest for 10 years. FV = 5,000 \u00D7 (1.06)^10 \u2248 5,000 \u00D7 1.7908 \u2248 $8,954.", workedExhibit: EXHIBIT_WORKED_FV },
          { id: "tvm-3-pv", name: "Present value of a single sum", expression: "PV = FV \u00F7 (1 + r)^n", when: "Wording cue: \"receive a single amount in the future... worth today.\"", worked: "You'll receive $10,000 in 5 years, at a 7% discount rate. PV = 10,000 \u00F7 (1.07)^5 \u2248 10,000 \u00F7 1.4026 \u2248 $7,130.", workedExhibit: EXHIBIT_WORKED_PV },
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
          { id: "tvm-4-fv-ord", name: "FV of an ordinary annuity", expression: "FV = PMT \u00D7 [((1+r)^n \u2212 1) / r]", when: "Equal end-of-period payments; solving for a future accumulated value.", worked: "You deposit $2,000 at the end of every year for 8 years, earning 5% annually. FV = 2,000 \u00D7 [((1.05)^8 \u2212 1) / 0.05] \u2248 2,000 \u00D7 9.549 \u2248 $19,098.", workedExhibit: EXHIBIT_WORKED_ANNUITY_FV },
          { id: "tvm-4-pv-ord", name: "PV of an ordinary annuity", expression: "PV = PMT \u00D7 [1 \u2212 (1+r)^\u2212n] / r", when: "Equal end-of-period payments; solving for today's value of the stream.", worked: "A stream pays $1,500 at the end of each year for 6 years, at a 4% discount rate. PV = 1,500 \u00D7 [1 \u2212 (1.04)^\u22126] / 0.04 \u2248 1,500 \u00D7 5.242 \u2248 $7,863." },
          { id: "tvm-4-due", name: "Annuity due adjustment — advanced", expression: "FVdue = FVordinary \u00D7 (1+r)\nPVdue = PVordinary \u00D7 (1+r)", when: "Same payment stream, but each payment occurs one period earlier than the ordinary case.", worked: "Take that same $1,500-per-year, 6-year, 4% stream, now paid at the beginning of each period. PVdue = 7,863 \u00D7 1.04 \u2248 $8,177 \u2014 about $314 more, just from receiving each payment one period sooner.", workedExhibit: EXHIBIT_WORKED_ANNUITY_PV },
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
          { id: "tvm-5-perp", name: "PV of a level perpetuity", expression: "PV = PMT / r", when: "Wording cue: \"forever,\" \"perpetual,\" \"in perpetuity,\" level payment.", worked: "A preferred stock pays a level $6 dividend per year forever, starting one year from now, at a 9% discount rate. PV = 6 / 0.09 \u2248 $66.67.", workedExhibit: EXHIBIT_WORKED_PERPETUITY_LEVEL },
          { id: "tvm-5-gperp", name: "PV of a growing perpetuity — advanced", expression: "PV = PMT1 / (r \u2212 g), requires r > g", when: "Same as above, but the payment grows at a constant rate each period.", worked: "Same stock, but the dividend grows 3% every year. PV = 6 / (0.09 \u2212 0.03) = 6 / 0.06 = $100 \u2014 notably higher, since a growing payment stream is worth more than a level one at the same starting amount.", workedExhibit: EXHIBIT_WORKED_PERPETUITY_GROWING },
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
          { id: "tvm-6-uneven", name: "PV of an uneven cash flow series — advanced", expression: "PV = \u03A3 [ CFt / (1+r)^t ] for t = 1 to n", when: "Wording cue: a list of different cash flow amounts by year, rather than one repeated payment.", worked: "A project returns $2,000 in year 1, $3,500 in year 2, and $1,000 in year 3, at a 6% discount rate. PV = 2,000/(1.06)^1 + 3,500/(1.06)^2 + 1,000/(1.06)^3 \u2248 1,887 + 3,115 + 840 \u2248 $5,842.", workedExhibit: EXHIBIT_WORKED_UNEVEN },
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
    ],
  },
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
    { id: "tvm-q1", question: "You deposit $8,000 today at 5% annual interest, compounded annually. What formula finds the value in 6 years?", options: ["PV = FV \u00F7 (1+r)^n", "FV = PV \u00D7 (1+r)^n", "PV = PMT \u00D7 [1 \u2212 (1+r)^\u2212n]/r", "PV = PMT / r"], correct: 1, explanation: "One deposit today, value later = single sum future value.", remediation: "tvm-3" },
    { id: "tvm-q2", question: "You will receive $20,000 in 8 years. Which formula finds what that's worth today at a 7% discount rate?", options: ["FV = PV \u00D7 (1+r)^n", "PV = FV \u00F7 (1+r)^n", "FV = PMT \u00D7 [((1+r)^n \u2212 1)/r]", "PV = PMT/(r\u2212g)"], correct: 1, explanation: "One future amount, value today = single sum present value.", remediation: "tvm-3" },
    { id: "tvm-q3", question: "A lease requires equal payments starting immediately, at the beginning of every year for 5 years. This is:", options: ["An ordinary annuity", "An annuity due", "A perpetuity", "An uneven cash flow series"], correct: 1, explanation: "Payments at the start of each period define an annuity due.", remediation: "tvm-4" },
    { id: "tvm-q4", question: "Which is true about an annuity due compared to an otherwise identical ordinary annuity?", options: ["It is always worth less", "It is always worth more, because each payment is received one period earlier", "They are always equal in value", "The relationship depends on the payment amount"], correct: 1, explanation: "Earlier receipt of identical payments means more time to earn a return, so the due version is worth more.", remediation: "tvm-4" },
    { id: "tvm-q5", question: "A preferred stock pays a level $4 dividend per year forever, starting one year from now. Discount rate is 8%. Which formula values it today?", options: ["PV = PMT / r", "PV = PMT/(r\u2212g)", "FV = PV \u00D7 (1+r)^n", "PV = \u03A3 CFt/(1+r)^t"], correct: 0, explanation: "Level payment continuing forever = level perpetuity.", remediation: "tvm-5" },
    { id: "tvm-q6", question: "For a growing perpetuity formula PV = PMT1/(r\u2212g) to give a sensible answer, you need:", options: ["g > r", "g = r", "r > g", "r and g must both be zero"], correct: 2, explanation: "The discount rate must exceed the growth rate, or the series never converges to a finite value.", remediation: "tvm-5" },
    { id: "tvm-q7", question: "A project returns $1,000 in year 1, $3,000 in year 2, and $2,000 in year 3. To value this today, you should:", options: ["Use the ordinary annuity PV formula with PMT = $2,000 (the average)", "Discount each cash flow individually back to today and sum the results", "Use the perpetuity formula", "Use the single-sum PV formula on the year-3 amount only"], correct: 1, explanation: "Unequal payments have no shortcut formula — discount each one and add.", remediation: "tvm-6" },
    { id: "tvm-q8", question: "A savings account quotes 6% annual interest, compounded monthly. What do you need to compute before comparing it to a 6.1% account compounded annually?", options: ["Nothing, 6% is already comparable to 6.1%", "The effective annual rate (EAR) of the 6% account", "The perpetuity value of the account", "The annuity due adjustment"], correct: 1, explanation: "Comparing rates with different compounding frequencies requires converting to a common effective annual rate.", remediation: "tvm-2" },
    { id: "tvm-q9", question: "\"You will receive $500 at the end of every month for the next 3 years.\" This is best solved as:", options: ["A single sum, since $500 is one number", "An ordinary annuity, with rate and n converted to monthly terms", "A perpetuity, since it repeats", "An uneven cash flow series"], correct: 1, explanation: "Equal payments at regular intervals with a defined end point = ordinary annuity, using monthly rate and monthly n.", remediation: "tvm-7" },
    { id: "tvm-q10", question: "A bond pays a semiannual coupon, but you're given only the annual stated rate. Before applying any TVM formula, you should:", options: ["Use the annual rate as-is", "Convert to a periodic (semiannual) rate and double the number of periods", "Ignore compounding frequency entirely", "Apply the perpetuity formula"], correct: 1, explanation: "Rate and period frequency must match — divide the annual rate by 2 and use 2× the number of years as n.", remediation: "tvm-8" },
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

function findLocation(sectionId) {
  for (const ch of CHAPTERS) {
    const s = ch.sections.find((s) => s.id === sectionId);
    if (s) return { chapter: ch, section: s };
  }
  return null;
}

function goTo(chId, secId) {
  chapterId = chId;
  sectionId = secId;
  expandedChapter = chId;
  view = "reading";
  renderAll();
}

function goToQuiz(chId) {
  chapterId = chId;
  expandedChapter = chId;
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
function renderSidebar() {
  const el = document.getElementById("sidebar");
  let html = `<div class="sidebar-brand">CFA <span>Level I</span> Study Ledger</div>`;
  html += `<div class="sidebar-account"><span>${currentUser ? currentUser.email : ""}</span><button id="signout-btn">Sign out</button></div>`;
  CHAPTERS.forEach((ch) => {
    html += `<div class="nav-chapter">
      <div class="nav-chapter-head" data-chapter="${ch.id}">
        <span class="nav-num">${ch.number}</span><span class="nav-chapter-title">${ch.title}</span>
      </div>`;
    if (expandedChapter === ch.id) {
      html += `<div class="nav-sections">`;
      ch.sections.forEach((s) => {
        const active = view === "reading" && sectionId === s.id ? " active" : "";
        html += `<div class="nav-section${active}" data-chapter="${ch.id}" data-section="${s.id}">
          <span class="nav-check">${completed.includes(s.id) ? "&#10003;" : ""}</span>${s.title}
        </div>`;
      });
      html += `</div><div class="nav-quiz" data-quizchapter="${ch.id}">Take ${ch.title} quiz</div>`;
    }
    html += `</div>`;
  });
  html += `<div class="nav-dashboard" id="dash-link">&#9670; Dashboard</div>`;
  el.innerHTML = html;

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
      html += `<span class="led-tag ${isAdv ? "advanced" : "basic"}">${isAdv ? "Advanced" : "Basic"}</span>
        <div class="led">
          <div class="led-name">${f.name}</div>
          <div class="led-expr">${f.expression}</div>
          <div class="led-when">${f.when}</div>
          ${f.worked ? `<div class="led-worked"><strong>Worked example:</strong> ${f.worked}</div>` : ""}
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
