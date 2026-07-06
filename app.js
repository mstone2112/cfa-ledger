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
          { id: "tvm-3-pv", name: "Present value of a single sum", expression: "PV = <span class=\"frac\"><span class=\"num\">FV</span><span class=\"den\">(1 + r)^n</span></span>", when: "Wording cue: \"receive a single amount in the future... worth today.\"", worked: "You'll receive $10,000 in 5 years, at a 7% discount rate. PV = 10,000 \u00F7 (1.07)^5 \u2248 10,000 \u00F7 1.4026 \u2248 $7,130.", workedExhibit: EXHIBIT_WORKED_PV },
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
          { id: "tvm-4-fv-ord", name: "FV of an ordinary annuity", expression: "FV = PMT \u00D7 <span class=\"frac\"><span class=\"num\">(1+r)^n \u2212 1</span><span class=\"den\">r</span></span>", when: "Equal end-of-period payments; solving for a future accumulated value.", worked: "You deposit $2,000 at the end of every year for 8 years, earning 5% annually. FV = 2,000 \u00D7 [((1.05)^8 \u2212 1) / 0.05] \u2248 2,000 \u00D7 9.549 \u2248 $19,098.", workedExhibit: EXHIBIT_WORKED_ANNUITY_FV },
          { id: "tvm-4-pv-ord", name: "PV of an ordinary annuity", expression: "PV = PMT \u00D7 <span class=\"frac\"><span class=\"num\">1 \u2212 (1+r)^\u2212n</span><span class=\"den\">r</span></span>", when: "Equal end-of-period payments; solving for today's value of the stream.", worked: "A stream pays $1,500 at the end of each year for 6 years, at a 4% discount rate. PV = 1,500 \u00D7 [1 \u2212 (1.04)^\u22126] / 0.04 \u2248 1,500 \u00D7 5.242 \u2248 $7,863." },
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
          { id: "tvm-5-perp", name: "PV of a level perpetuity", expression: "PV = <span class=\"frac\"><span class=\"num\">PMT</span><span class=\"den\">r</span></span>", when: "Wording cue: \"forever,\" \"perpetual,\" \"in perpetuity,\" level payment.", worked: "A preferred stock pays a level $6 dividend per year forever, starting one year from now, at a 9% discount rate. PV = 6 / 0.09 \u2248 $66.67.", workedExhibit: EXHIBIT_WORKED_PERPETUITY_LEVEL },
          { id: "tvm-5-gperp", name: "PV of a growing perpetuity — advanced", expression: "PV = <span class=\"frac\"><span class=\"num\">PMT1</span><span class=\"den\">r \u2212 g</span></span>, requires r > g", when: "Same as above, but the payment grows at a constant rate each period.", worked: "Same stock, but the dividend grows 3% every year. PV = 6 / (0.09 \u2212 0.03) = 6 / 0.06 = $100 \u2014 notably higher, since a growing payment stream is worth more than a level one at the same starting amount.", workedExhibit: EXHIBIT_WORKED_PERPETUITY_GROWING },
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
          { id: "tvm-6-uneven", name: "PV of an uneven cash flow series — advanced", expression: "PV = \u03A3 <span class=\"frac\"><span class=\"num\">CFt</span><span class=\"den\">(1+r)^t</span></span> for t = 1 to n", when: "Wording cue: a list of different cash flow amounts by year, rather than one repeated payment.", worked: "A project returns $2,000 in year 1, $3,500 in year 2, and $1,000 in year 3, at a 6% discount rate. PV = 2,000/(1.06)^1 + 3,500/(1.06)^2 + 1,000/(1.06)^3 \u2248 1,887 + 3,115 + 840 \u2248 $5,842.", workedExhibit: EXHIBIT_WORKED_UNEVEN },
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
  {
    id: "probstat",
    number: "03",
    title: "Probability & Statistics",
    subtitle: "Completing Quantitative Methods: the tools that describe risk, return, and uncertainty",
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
          { id: "probstat-2-addition", name: "Addition rule (general)", expression: "P(A or B) = P(A) + P(B) \u2212 P(A and B)", when: "Finding the probability that either of two events happens.", worked: "The probability a stock's price rises this month is 0.55; the probability its trading volume rises is 0.40; the probability both happen together is 0.25. P(price rises or volume rises) = 0.55 + 0.40 \u2212 0.25 = 0.70." },
          { id: "probstat-2-mult", name: "Multiplication rule", expression: "P(A and B) = P(A) \u00D7 P(B | A)", when: "Finding the probability that both of two events happen. If independent, simplifies to P(A) \u00D7 P(B).", worked: "Probability a fund manager beats the market in a given year is 0.30. Assuming each year is independent, probability of beating the market two years in a row = 0.30 \u00D7 0.30 = 0.09, or 9%." },
          { id: "probstat-2-ev", name: "Expected value", expression: "E(X) = \u03A3 [ P(outcome) \u00D7 value of outcome ]", when: "Finding the probability-weighted average outcome.", worked: "A bond has a 90% chance of paying $1,000 at maturity and a 10% chance of defaulting and paying only $400. E(X) = (0.90 \u00D7 1,000) + (0.10 \u00D7 400) = 900 + 40 = $940." },
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
          { id: "probstat-3-var", name: "Sample variance and standard deviation", expression: "s\u00B2 = \u03A3(xi \u2212 mean)\u00B2 / (n \u2212 1)\ns = \u221As\u00B2", when: "Measuring how spread out a data set is.", worked: "A stock's returns over 4 years are 10%, 14%, 6%, 10%. Mean = 10%. Squared deviations: 0, 16, 16, 0. Variance = (0+16+16+0)/(4\u22121) \u2248 10.67. Standard deviation = \u221A10.67 \u2248 3.27%." },
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
    id: "econ",
    number: "04",
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
          { id: "econ-3-elasticity", name: "Price elasticity of demand", expression: "Elasticity = <span class=\"frac\"><span class=\"num\">% change in quantity demanded</span><span class=\"den\">% change in price</span></span>", when: "Measuring how sensitive demand is to a price change.", worked: "A 10% price increase causes a 25% drop in quantity demanded. Elasticity = \u221225% / 10% = \u22122.5 (elastic)." },
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
    number: "05",
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
          { id: "fsa-3b-methods", name: "Cost of goods sold and ending inventory (rising-price example)", expression: "COGS + Ending inventory = Total cost of goods available for sale", when: "The three methods always split the same total cost differently between COGS and ending inventory — they never change the total.", worked: "A company buys 100 units at $10 and then 100 units at $12 (rising prices), and sells 150 units. FIFO: COGS = (100\u00D7$10) + (50\u00D7$12) = $1,600; ending inventory = 50\u00D7$12 = $600. LIFO: COGS = (100\u00D7$12) + (50\u00D7$10) = $1,700; ending inventory = 50\u00D7$10 = $500. Weighted average: average cost = $2,200 / 200 units = $11/unit; COGS = 150\u00D7$11 = $1,650; ending inventory = 50\u00D7$11 = $550. Notice LIFO's higher COGS (and therefore lower reported profit) during rising prices — the opposite would be true if prices were falling instead." },
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
          { id: "fsa-3c-sl", name: "Straight-line depreciation", expression: "Annual depreciation = <span class=\"frac\"><span class=\"num\">Cost \u2212 Salvage value</span><span class=\"den\">Useful life</span></span>", when: "Spreading an asset's cost evenly across its useful life.", worked: "A machine costs $50,000, has an estimated salvage value of $5,000, and a 5-year useful life. Annual depreciation = (50,000 \u2212 5,000) / 5 = $9,000 every year." },
          { id: "fsa-3c-ddb", name: "Double-declining balance (accelerated) — advanced", expression: "Annual depreciation = 2 \u00D7 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">Useful life</span></span> \u00D7 Beginning book value", when: "Front-loading more depreciation into earlier years.", worked: "The same $50,000 machine, 5-year life, using double-declining balance (rate = 2/5 = 40% of book value each year). Year 1: 50,000 \u00D7 0.40 = $20,000. Year 2: (50,000 \u2212 20,000) \u00D7 0.40 = $12,000. Year 3: (30,000\u221212,000) \u00D7 0.40 = $7,200 \u2014 and so on, declining each year, unlike straight-line's flat $9,000." },
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
          { id: "fsa-3d-deferred", name: "Deferred tax liability from a timing difference", expression: "Deferred tax liability created = (Tax depreciation \u2212 Book depreciation) \u00D7 Tax rate", when: "Estimating the deferred tax impact of using different depreciation methods for book vs. tax purposes.", worked: "A company uses straight-line depreciation for its books ($9,000 in year 1) but accelerated depreciation for tax purposes ($15,000 in year 1), and the tax rate is 25%. The extra $6,000 of tax depreciation ($15,000 \u2212 $9,000) reduces taxable income now without reducing book income by the same amount, creating a deferred tax liability of 6,000 \u00D7 0.25 = $1,500 — tax the company will effectively pay in a later year, once tax depreciation falls below book depreciation." },
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
          { id: "fsa-4-current", name: "Current ratio (liquidity)", expression: "<span class=\"frac\"><span class=\"num\">Current assets</span><span class=\"den\">Current liabilities</span></span>", when: "Assessing ability to meet short-term obligations.", worked: "Current assets of $500,000 and current liabilities of $250,000. Current ratio = 500,000 / 250,000 = 2.0." },
          { id: "fsa-4-de", name: "Debt-to-equity ratio (solvency)", expression: "<span class=\"frac\"><span class=\"num\">Total debt</span><span class=\"den\">Total equity</span></span>", when: "Assessing leverage / ability to meet long-term obligations.", worked: "Total debt of $3 million and total equity of $2 million. Debt-to-equity = 3,000,000 / 2,000,000 = 1.5." },
          { id: "fsa-4-margin", name: "Net profit margin (profitability)", expression: "<span class=\"frac\"><span class=\"num\">Net income</span><span class=\"den\">Revenue</span></span>", when: "Assessing how much profit is generated per dollar of sales.", worked: "Net income of $400,000 on revenue of $5,000,000. Net profit margin = 400,000 / 5,000,000 = 8%." },
          { id: "fsa-4-turnover", name: "Inventory turnover (activity)", expression: "<span class=\"frac\"><span class=\"num\">Cost of goods sold</span><span class=\"den\">Average inventory</span></span>", when: "Assessing how efficiently inventory is used.", worked: "COGS of $2,000,000 and average inventory of $400,000. Inventory turnover = 2,000,000 / 400,000 = 5 times per year." },
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
          { id: "fsa-5b-commonsize", name: "Common-size income statement line item", expression: "Common-size % = <span class=\"frac\"><span class=\"num\">Line item</span><span class=\"den\">Total revenue</span></span>", when: "Restating an income statement line as a percentage of revenue, to compare companies of different sizes.", worked: "Company A has $10 million revenue and $6 million cost of goods sold: COGS common-size = 6/10 = 60%. Company B has $100 million revenue and $65 million cost of goods sold: COGS common-size = 65/100 = 65%. Despite Company B being ten times larger in dollar terms, common-sizing reveals it actually runs a slightly less efficient cost structure (65% vs. 60%) — a comparison the raw dollar figures alone would have obscured." },
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
    ],
  },
  {
    id: "corp",
    number: "06",
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
        id: "corp-3",
        title: "Capital budgeting: NPV and IRR",
        body: [
          `When a company decides whether to invest in a new project, it estimates the project's future cash flows and discounts them back to today — exactly the uneven cash flow technique from Chapter 02.`,
          `Internal rate of return (IRR) is the discount rate at which a project's NPV would be exactly zero. If a project's IRR exceeds the company's cost of capital, the project is generally attractive.`,
        ],
        exhibits: [{ afterParagraph: 0, svg: EXHIBIT_WORKED_NPV }],
        formulas: [
          { id: "corp-3-npv", name: "Net present value (NPV)", expression: "NPV = (PV of future cash inflows) \u2212 (initial investment)", when: "Positive NPV = expected to add value; negative NPV = expected to destroy value.", worked: "A project costs $50,000 today and generates $15,000/year for 5 years. At 10%, PV of that annuity \u2248 15,000 \u00D7 3.7908 \u2248 $56,862. NPV \u2248 56,862 \u2212 50,000 \u2248 $6,862 — positive." },
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
        body: [`Capital structure describes the mix of debt and equity a company uses to fund itself. Using more debt (higher leverage) can boost returns to equity holders when things go well, since debt is a fixed cost — but it also amplifies losses and financial risk when things go poorly.`],
        formulas: [],
      },
      {
        id: "corp-6",
        title: "Working capital management",
        body: [`Working capital is the difference between a company's current assets and current liabilities — the cash cushion available for day-to-day operations. Managing it well means collecting receivables promptly, not over-investing in inventory, and timing supplier payments sensibly.`],
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
    number: "07",
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
        body: [`Equities trade on organized exchanges (like the NYSE) or over-the-counter networks. A stock market index (like the S&P 500) tracks the combined performance of a specified basket of stocks.`],
        formulas: [],
      },
      {
        id: "equity-4",
        title: "Equity valuation: the dividend discount model",
        body: [`If a company pays dividends, its shares can be valued using the exact same perpetuity logic from Chapter 02 — a share of stock is just a claim on a stream of future dividends, discounted back to today.`],
        exhibits: [{ afterParagraph: 0, svg: EXHIBIT_WORKED_DDM }],
        formulas: [
          { id: "equity-4-ggm", name: "Gordon growth (constant-growth dividend discount) model", expression: "V0 = <span class=\"frac\"><span class=\"num\">D1</span><span class=\"den\">r \u2212 g</span></span>", when: "Values a stock as a growing perpetuity of dividends.", worked: "A stock just paid a $2.00 dividend, growing 4% per year forever. D1 = 2.00 \u00D7 1.04 = $2.08. At a 10% required return, V0 = 2.08 / (0.10 \u2212 0.04) \u2248 $34.67." },
        ],
      },
      {
        id: "equity-5",
        title: "Relative valuation: multiples",
        body: [`Rather than discounting cash flows directly, analysts often value a stock by comparing it to similar companies using a multiple — a ratio of price to some fundamental metric.`],
        formulas: [
          { id: "equity-5-pe", name: "Price-to-earnings (P/E) ratio", expression: "<span class=\"frac\"><span class=\"num\">Price per share</span><span class=\"den\">Earnings per share</span></span>", when: "Comparing a stock's price to its earnings, relative to similar companies.", worked: "A stock trades at $60 with earnings per share of $4.00. P/E = 60 / 4 = 15." },
        ],
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
    number: "08",
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
          { id: "fi-2b-zero", name: "Zero-coupon bond price", expression: "Price = <span class=\"frac\"><span class=\"num\">Face value</span><span class=\"den\">(1 + r)^n</span></span>", when: "No coupon payments at all — just a single lump sum at maturity.", worked: "A $1,000 face value zero-coupon bond matures in 5 years; the market yield is 6%. Price = 1,000 / (1.06)^5 \u2248 1,000 / 1.3382 \u2248 $747.26. The investor pays $747.26 today and receives $1,000 in 5 years — the entire $252.74 gain is the return, with no coupons along the way." },
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
          { id: "fi-3-price", name: "Bond price", expression: "Price = PV(coupon annuity) + PV(face value)", when: "Finding a bond's fair price given its coupon, face value, maturity, and required yield.", worked: "A $1,000 face value bond, 6% annual coupon ($60/yr), 3 years to maturity, market yield 8%. PV of coupons \u2248 $154.63. PV of face value \u2248 $793.83. Price \u2248 $948.46 — a discount, since coupon (6%) < yield (8%)." },
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
          { id: "fi-4-current", name: "Current yield", expression: "Current yield = <span class=\"frac\"><span class=\"num\">Annual coupon payment</span><span class=\"den\">Current bond price</span></span>", when: "A quick, rough yield estimate — ignores any price gain/loss to maturity.", worked: "A bond with a $60 annual coupon currently trades at $948. Current yield = 60 / 948 \u2248 6.33% — note this is higher than the 6% coupon rate, simply because the bond is trading below face value." },
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
          { id: "fi-4b-accrued", name: "Accrued interest (approximate)", expression: "Accrued interest = Annual coupon \u00D7 <span class=\"frac\"><span class=\"num\">Days since last coupon</span><span class=\"den\">Days in coupon period</span></span>", when: "Finding how much of the next coupon the seller has already earned.", worked: "A bond pays a $60 annual coupon (once a year, 360-day convention) and it has been 90 days since the last coupon payment. Accrued interest = 60 \u00D7 (90/360) = $15. If the quoted (clean) price is $980, the buyer actually pays the dirty price: $980 + $15 = $995 at settlement." },
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
        title: "Duration",
        body: [
          `Duration measures a bond's sensitivity to changes in interest rates. Longer-maturity bonds and lower-coupon bonds generally have higher duration, because more of their value sits further out in time, where discounting has a bigger effect on present value.`,
          `A useful approximation lets you estimate the actual price impact of a rate change once you know a bond's duration.`,
        ],
        formulas: [
          { id: "fi-6-duration", name: "Approximate price change from duration", expression: "% change in price \u2248 \u2212 Duration \u00D7 (change in yield)", when: "Estimating how much a bond's price will move for a given change in market yield.", worked: "A bond has a duration of 7 and market yields rise by 0.50 percentage points (0.005). % change in price \u2248 \u22127 \u00D7 0.005 = \u22123.5% — the bond's price is expected to fall about 3.5%." },
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
          { cue: "Estimating a bond's price change from a change in yield", formula: "Duration", section: "fi-6" },
          { cue: "An issuer's right to redeem a bond before maturity", formula: "Callable bond", section: "fi-6b" },
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
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "derivatives",
    number: "09",
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
    number: "10",
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
        id: "alt-3",
        title: "Key characteristics versus traditional investments",
        body: [`Alternative investments typically share several traits: illiquidity (money often locked up for years), higher fees, limited transparency, and diversification potential — returns are often less correlated with traditional markets, which can improve a portfolio's overall risk-return profile. This connects directly to the correlation concept from Probability & Statistics and resurfaces in Portfolio Management.`],
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
    number: "11",
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
        id: "port-3",
        title: "Risk and return of a portfolio",
        body: [
          `A portfolio's expected return is simply the weighted average of the expected returns of its individual holdings, weighted by how much of the portfolio's value each holding represents.`,
          `A portfolio's risk, however, is not simply the weighted average of the individual risks — because how the holdings move together (their covariance/correlation) affects the portfolio's overall variance. This is the mathematical foundation of diversification.`,
        ],
        formulas: [
          { id: "port-3-return", name: "Portfolio expected return", expression: "E(Rp) = \u03A3 [ wi \u00D7 E(Ri) ]", when: "Finding a portfolio's overall expected return from its holdings' weights and expected returns.", worked: "A portfolio is 60% Stock A (10% expected return) and 40% Stock B (6% expected return). E(Rp) = (0.60\u00D710%) + (0.40\u00D76%) = 8.4%." },
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
        title: "The efficient frontier and capital allocation line, conceptually",
        body: [`Plotting every possible portfolio combination of risky assets by risk and expected return traces out a curve; the efficient frontier is the upper-left edge — the set of portfolios offering the highest expected return for each level of risk. Adding a risk-free asset creates the capital allocation line, a straight line from the risk-free rate through the optimal risky portfolio, representing every risk-free/risky blend an investor could choose.`],
        formulas: [],
      },
      {
        id: "port-6",
        title: "Formula/concept decision guide",
        type: "decision-guide",
        body: [`Match the question to the concept.`],
        decisionRows: [
          { cue: "A portfolio's expected return given its holdings' weights and expected returns", formula: "Weighted average formula (E(Rp))", section: "port-3" },
          { cue: "Whether combining two assets reduces risk", formula: "Correlation between the two assets", section: "port-4" },
          { cue: "The best possible risk-return trade-off available from risky assets", formula: "Efficient frontier", section: "port-5" },
          { cue: "Combining a risk-free asset with a risky portfolio", formula: "Capital allocation line", section: "port-5" },
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
          { item: "Assuming diversification always eliminates risk", detail: "It reduces risk from holdings moving independently, but doesn't eliminate market-wide risk." },
          { item: "Confusing the efficient frontier with the capital allocation line", detail: "The frontier uses only risky assets; the CAL specifically incorporates a risk-free asset." },
        ],
        formulas: [],
      },
    ],
  },
  {
    id: "ethics",
    number: "12",
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
        body: [`Investment professionals are routinely trusted with other people's money, information, and financial futures. Because the potential for harm from misconduct is high, and because trust is the foundation the entire investment industry depends on, professional bodies place enormous emphasis on ethical conduct.`],
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
  probstat: [
    { id: "probstat-q1", question: "Two events are mutually exclusive. What is P(A and B)?", options: ["1", "0", "0.5", "Cannot be determined"], correct: 1, explanation: "Mutually exclusive events can't both happen, so their joint probability is zero.", remediation: "probstat-2" },
    { id: "probstat-q2", question: "Probability of rain is 0.3, probability of a delayed flight is 0.2, both together is 0.1. P(rain or delayed flight)?", options: ["0.5", "0.6", "0.4", "0.1"], correct: 2, explanation: "0.3 + 0.2 \u2212 0.1 = 0.4.", remediation: "probstat-2" },
    { id: "probstat-q3", question: "A fund has a 60% chance of matching the benchmark each year, independent across years. Probability of matching it 3 years running?", options: ["0.6", "0.18", "0.216", "1.8"], correct: 2, explanation: "0.6\u00B3 = 0.216.", remediation: "probstat-2" },
    { id: "probstat-q4", question: "A data set has one extreme outlier. Which measure of central tendency is least affected?", options: ["Mean", "Median", "Range", "Variance"], correct: 1, explanation: "The median is resistant to extreme outliers; the mean is pulled toward them.", remediation: "probstat-3" },
    { id: "probstat-q5", question: "Standard deviation is the square root of which measure?", options: ["Mean", "Correlation", "Variance", "Covariance"], correct: 2, explanation: "Standard deviation = \u221Avariance.", remediation: "probstat-3" },
    { id: "probstat-q6", question: "Two stocks have a correlation of \u22120.9. What does that suggest?", options: ["They move randomly with no relationship", "They tend to move strongly in opposite directions", "They always have equal returns", "One causes the other"], correct: 1, explanation: "Correlation near \u22121 means a strong opposite relationship.", remediation: "probstat-3" },
    { id: "probstat-q7", question: "Rejecting a null hypothesis that was actually true is called", options: ["A Type II error", "A Type I error", "A significance level", "A confidence interval"], correct: 1, explanation: "A Type I error is a false rejection of a true null hypothesis.", remediation: "probstat-5" },
    { id: "probstat-q8", question: "Which distribution is fully described by just its mean and standard deviation?", options: ["Any distribution", "The normal distribution", "A skewed distribution only", "None"], correct: 1, explanation: "The normal distribution is fully characterized by its mean and standard deviation.", remediation: "probstat-4" },
  ],
  econ: [
    { id: "econ-q1", question: "Price rises above equilibrium. What results?", options: ["A shortage", "A surplus", "No change", "Elasticity increases"], correct: 1, explanation: "Above equilibrium, quantity supplied exceeds quantity demanded — a surplus.", remediation: "econ-2" },
    { id: "econ-q2", question: "A 5% price increase causes only a 1% drop in quantity demanded. Demand is", options: ["Elastic", "Inelastic", "Perfectly elastic", "Undefined"], correct: 1, explanation: "A small quantity response to a price change indicates inelastic demand.", remediation: "econ-3" },
    { id: "econ-q3", question: "Many sellers, identical product, no pricing power describes", options: ["Monopoly", "Oligopoly", "Perfect competition", "Monopolistic competition"], correct: 2, explanation: "Perfect competition features many sellers of identical goods with no individual pricing power.", remediation: "econ-4" },
    { id: "econ-q4", question: "Which GDP measure adjusts for inflation?", options: ["Nominal GDP", "Real GDP", "Neither", "Both equally"], correct: 1, explanation: "Real GDP strips out the effect of price changes.", remediation: "econ-5" },
    { id: "econ-q5", question: "A central bank lowering interest rates to stimulate borrowing is an example of", options: ["Contractionary fiscal policy", "Expansionary monetary policy", "Expansionary fiscal policy", "Contractionary monetary policy"], correct: 1, explanation: "Lowering rates via the central bank is expansionary monetary policy.", remediation: "econ-6" },
    { id: "econ-q6", question: "A sustained rise in the general price level is called", options: ["Deflation", "Inflation", "Recession", "Appreciation"], correct: 1, explanation: "Inflation is a sustained rise in the general price level.", remediation: "econ-7" },
    { id: "econ-q7", question: "A country's currency weakens. What tends to happen to its exports?", options: ["They become more expensive abroad, hurting exports", "They become cheaper abroad, helping exports", "No effect", "Imports become cheaper"], correct: 1, explanation: "A weaker currency makes domestic goods cheaper for foreign buyers.", remediation: "econ-8" },
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
  ],
  corp: [
    { id: "corp-q1", question: "A project has a positive NPV. What does that suggest?", options: ["It's expected to destroy value", "It's expected to add value", "Its IRR equals zero", "It should always be rejected"], correct: 1, explanation: "Positive NPV means the project is expected to add value.", remediation: "corp-3" },
    { id: "corp-q2", question: "IRR is defined as the discount rate at which NPV equals", options: ["The cost of capital", "One", "Zero", "The initial investment"], correct: 2, explanation: "IRR is the break-even discount rate where NPV = 0.", remediation: "corp-3" },
    { id: "corp-q3", question: "Which measure blends the cost of debt and equity, weighted by their share of the capital structure?", options: ["NPV", "IRR", "WACC", "Working capital"], correct: 2, explanation: "WACC blends financing costs weighted by capital structure proportions.", remediation: "corp-4" },
    { id: "corp-q4", question: "Increasing debt relative to equity increases which financial characteristic?", options: ["Liquidity", "Leverage (and financial risk)", "Working capital", "Market efficiency"], correct: 1, explanation: "More debt relative to equity means higher leverage.", remediation: "corp-5" },
    { id: "corp-q5", question: "Current assets minus current liabilities defines", options: ["WACC", "Working capital", "NPV", "Capital structure"], correct: 1, explanation: "Working capital = current assets \u2212 current liabilities.", remediation: "corp-6" },
    { id: "corp-q6", question: "A project's IRR is below the company's cost of capital. What should generally happen?", options: ["The project should generally be accepted", "The project should generally be rejected", "It has no bearing on the decision", "The company should raise more debt"], correct: 1, explanation: "An IRR below the cost of capital means the project is expected to destroy value.", remediation: "corp-3" },
  ],
  equity: [
    { id: "equity-q1", question: "Which security type is typically paid before common shareholders but usually has no vote?", options: ["Common stock", "Preferred stock", "A bond", "A call option"], correct: 1, explanation: "Preferred stock has priority over common stock but usually no voting rights.", remediation: "equity-2" },
    { id: "equity-q2", question: "Gordon growth model requires which relationship between r and g?", options: ["g must exceed r", "r must exceed g", "r must equal g", "No relationship is required"], correct: 1, explanation: "The model only works when the required return exceeds the growth rate.", remediation: "equity-4" },
    { id: "equity-q3", question: "A stock paid a $3.00 dividend, expected to grow 5% forever, at an 11% required return. What is D1?", options: ["$3.00", "$3.05", "$3.15", "$3.30"], correct: 2, explanation: "D1 = 3.00 \u00D7 1.05 = $3.15.", remediation: "equity-4" },
    { id: "equity-q4", question: "Using that D1, what is the Gordon growth value?", options: ["$30.00", "$52.50", "$60.00", "$45.00"], correct: 1, explanation: "3.15 / (0.11 \u2212 0.05) = $52.50.", remediation: "equity-4" },
    { id: "equity-q5", question: "Price per share divided by earnings per share defines", options: ["The P/E ratio", "The current yield", "WACC", "Duration"], correct: 0, explanation: "P/E = price per share \u00F7 earnings per share.", remediation: "equity-5" },
    { id: "equity-q6", question: "The idea that stock prices already reflect available information describes", options: ["The Gordon growth model", "The efficient market hypothesis", "Comparative advantage", "Duration"], correct: 1, explanation: "The efficient market hypothesis describes prices reflecting available information.", remediation: "equity-6" },
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
  ],
  derivatives: [
    { id: "deriv-q1", question: "Which derivative type standardizes the contract and trades it on an exchange?", options: ["Forward", "Futures", "Swap", "A private loan"], correct: 1, explanation: "Futures are standardized, exchange-traded contracts.", remediation: "deriv-2" },
    { id: "deriv-q2", question: "A contract giving the right, but not the obligation, to buy at a set price is", options: ["A forward", "A call option", "A put option", "A swap"], correct: 1, explanation: "A call option gives the right to buy.", remediation: "deriv-3" },
    { id: "deriv-q3", question: "An option buyer's maximum possible loss is", options: ["Unlimited", "The premium paid", "The strike price", "Twice the premium"], correct: 1, explanation: "An option buyer can never lose more than the premium paid.", remediation: "deriv-3" },
    { id: "deriv-q4", question: "An agreement to exchange a fixed interest rate for a floating rate over time is", options: ["A forward", "A futures contract", "An interest rate swap", "A call option"], correct: 2, explanation: "This describes an interest rate swap.", remediation: "deriv-4" },
    { id: "deriv-q5", question: "A farmer locking in a future selling price to protect against falling prices is engaging in", options: ["Speculation", "Hedging", "Arbitrage", "Leverage"], correct: 1, explanation: "Reducing an existing risk is hedging.", remediation: "deriv-5" },
    { id: "deriv-q6", question: "Which derivative type carries an obligation for both parties, privately negotiated (not exchange-traded)?", options: ["Futures", "Option", "Forward", "None of these"], correct: 2, explanation: "A forward is a private, bilateral obligation.", remediation: "deriv-2" },
  ],
  altinvest: [
    { id: "alt-q1", question: "A pooled fund using leverage and short-selling across flexible strategies is a", options: ["Mutual fund", "Hedge fund", "REIT", "Government bond fund"], correct: 1, explanation: "Hedge funds use flexible strategies including leverage and short-selling.", remediation: "alt-2" },
    { id: "alt-q2", question: "An ownership stake in a company not listed on a public exchange describes", options: ["Common stock", "Private equity / venture capital", "A REIT", "A commodity"], correct: 1, explanation: "Private equity/venture capital involves stakes in non-listed companies.", remediation: "alt-2" },
    { id: "alt-q3", question: "Physical goods like oil or gold are most commonly accessed through", options: ["Common stock", "Futures contracts (commodities)", "Preferred stock", "Bonds"], correct: 1, explanation: "Commodities are typically accessed via futures contracts.", remediation: "alt-2" },
    { id: "alt-q4", question: "Which shared characteristic often lets alternative investments improve a portfolio's risk-return profile?", options: ["Higher fees", "Lower correlation with traditional markets", "Greater transparency", "Guaranteed higher returns"], correct: 1, explanation: "Lower correlation with traditional assets can improve diversification.", remediation: "alt-3" },
    { id: "alt-q5", question: "Extra expected return demanded for tying up money in a hard-to-sell investment is called", options: ["A credit spread", "An illiquidity premium", "A dividend yield", "A coupon"], correct: 1, explanation: "This is the illiquidity premium.", remediation: "alt-3" },
    { id: "alt-q6", question: "Toll roads, airports, and utilities fall under which category?", options: ["Hedge funds", "Private equity", "Infrastructure", "Commodities"], correct: 2, explanation: "These are examples of infrastructure investments.", remediation: "alt-2" },
  ],
  portfolio: [
    { id: "port-q1", question: "A portfolio is 70% Stock A (12% expected return) and 30% Stock B (5% expected return). Expected portfolio return?", options: ["8.5%", "9.9%", "12%", "17%"], correct: 1, explanation: "0.70\u00D712% + 0.30\u00D75% = 9.9%.", remediation: "port-3" },
    { id: "port-q2", question: "Two stocks have a correlation of +1. Combining them provides", options: ["Full diversification benefit", "No diversification benefit", "Negative returns", "Guaranteed risk elimination"], correct: 1, explanation: "Perfectly correlated assets move together and provide no diversification benefit.", remediation: "port-4" },
    { id: "port-q3", question: "The lower the correlation between two holdings, the", options: ["Smaller the diversification benefit", "Greater the diversification benefit", "Higher the expected return", "Lower the expected return"], correct: 1, explanation: "Lower correlation generally means greater diversification benefit.", remediation: "port-4" },
    { id: "port-q4", question: "The set of portfolios offering the highest return for each level of risk is called", options: ["The capital allocation line", "The efficient frontier", "The yield curve", "WACC"], correct: 1, explanation: "This defines the efficient frontier.", remediation: "port-5" },
    { id: "port-q5", question: "Adding a risk-free asset to the optimal risky portfolio creates", options: ["The efficient frontier", "The capital allocation line", "A hedge fund", "A yield curve"], correct: 1, explanation: "This defines the capital allocation line.", remediation: "port-5" },
    { id: "port-q6", question: "Is portfolio risk generally a simple weighted average of the individual holdings' risks?", options: ["Yes, always", "No — it also depends on the correlations between the holdings", "Only for bonds", "Only for two-asset portfolios"], correct: 1, explanation: "Portfolio risk depends on correlations, not just weighted individual risks.", remediation: "port-3" },
  ],
  ethics: [
    { id: "ethics-q1", question: "When a professional's interests conflict with a client's, whose interest should generally take priority?", options: ["The professional's", "The employer's", "The client's", "Whichever is most profitable"], correct: 2, explanation: "Client interests should generally take priority.", remediation: "ethics-3" },
    { id: "ethics-q2", question: "A professional recommends a product mainly because it pays a higher commission, despite a better-suited alternative existing. This most likely violates which principle?", options: ["Competence", "Client interests coming first / avoiding conflicts of interest", "Market integrity only", "None of these"], correct: 1, explanation: "This is a classic conflict-of-interest and client-priority violation.", remediation: "ethics-3" },
    { id: "ethics-q3", question: "Giving one client earlier access to the same research than another client violates which principle?", options: ["Competence", "Fair dealing", "Market integrity only", "Disclosure of gifts"], correct: 1, explanation: "Unequal access to information violates fair dealing.", remediation: "ethics-3" },
    { id: "ethics-q4", question: "A professional accepts an undisclosed gift from a company before issuing a report on it. What's the core issue?", options: ["Nothing, gifts are always fine", "An undisclosed conflict of interest", "A market integrity violation only", "A competence violation"], correct: 1, explanation: "The core issue is the undisclosed conflict of interest.", remediation: "ethics-3" },
    { id: "ethics-q5", question: "When in doubt between two plausible answers on an ethics vignette, which is usually the safer choice?", options: ["The one that benefits the professional most", "The one that most protects client interests and market integrity", "The one requiring the least disclosure", "Either, since ethics questions have no clear answer"], correct: 1, explanation: "The most client-protective, market-integrity-preserving answer is usually correct.", remediation: "ethics-4" },
    { id: "ethics-q6", question: "What is the authoritative source for the actual Code of Ethics and Standards of Professional Conduct?", options: ["This app's chapter summary", "Any third-party study guide", "CFA Institute's official published Code and Standards", "None — it's not formally codified"], correct: 2, explanation: "Always defer to CFA Institute's official published Code and Standards.", remediation: "ethics-1" },
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
