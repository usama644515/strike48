'use client';
import React, { useEffect } from 'react';
import styles from './ComparisonSection.module.css';

export default function ComparisonSection() {
  useEffect(() => {
    const axes = [
      "Speed to Detect",
      "Speed to Resolve",
      "Automation Level",
      "Storage Efficiency",
      "Ease of Onboarding",
      "Platform Consolidation",
      "Coverage Breadth",
      "Auditability/Repeatability"
    ];

    const series = [
      { name: 'Agentic LM', color: '#2763EF', values: [9, 9, 10, 8, 8, 10, 9, 9] },
      { name: 'SIEM', color: '#475569', values: [8, 6, 4, 4, 5, 5, 8, 9] },
      { name: 'Observability/APM', color: '#F4C005', values: [7, 6, 5, 6, 8, 4, 6, 6] },
      { name: 'Data Lake', color: '#dc2626', values: [4, 4, 3, 9, 5, 3, 7, 5] },
      { name: 'SOAR', color: '#059669', values: [5, 7, 7, 5, 6, 4, 6, 7] },
    ];

    const drawRadarChart = () => {
      const svg = document.getElementById('radar');
      if (!svg) return;
      svg.innerHTML = '';

      const size = 650;
      const cx = size / 2;
      const cy = size / 2;
      const radius = 240;
      const levels = 5;

      const polar = (i, value) => {
        const angle = (Math.PI * 2 * i / axes.length) - Math.PI / 2;
        const r = (value / 10) * radius;
        return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
      };

      const createElement = (tag, attrs = {}) => {
        const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
        Object.entries(attrs).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });
        return element;
      };

      // Helper: hex to rgba
      const hexToRgba = (hex, alpha) => {
        const h = hex.replace('#', '');
        const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r},${g},${b},${alpha})`;
      };

      // Grid rings
      for (let l = 1; l <= levels; l++) {
        const ring = createElement('circle', {
          cx,
          cy,
          r: radius * l / levels,
          fill: 'none',
          stroke: 'rgba(0,0,0,0.2)',
          'stroke-dasharray': '4 6'
        });
        svg.appendChild(ring);
      }

      // Spokes + Labels
      axes.forEach((axis, i) => {
        const [x, y] = polar(i, 10);
        const spoke = createElement('line', {
          x1: cx,
          y1: cy,
          x2: x,
          y2: y,
          stroke: 'rgba(0,0,0,0.25)'
        });
        svg.appendChild(spoke);

        // Labels (with .axisLabel class for enforced black text)
        const [lx, ly] = polar(i, 11.5);
        const label = createElement('text', {
          x: lx,
          y: ly,
          class: 'axisLabel',
          'text-anchor': lx < cx ? 'end' : (Math.abs(lx - cx) < 8 ? 'middle' : 'start'),
          'dominant-baseline': ly < cy ? 'auto' : 'hanging',
        });
        label.textContent = axis;
        svg.appendChild(label);
      });

      // Polygons
      series.forEach(s => {
        const points = s.values.map((v, i) => polar(i, v).join(',')).join(' ');

        // Fill
        const fill = createElement('polygon', {
          points,
          fill: hexToRgba(s.color, 0.22),
          stroke: 'none'
        });
        svg.appendChild(fill);

        // Outline
        const stroke = createElement('polygon', {
          points,
          fill: 'none',
          stroke: s.color,
          'stroke-width': 2
        });
        svg.appendChild(stroke);

        // Dots
        s.values.forEach((v, i) => {
          const [x, y] = polar(i, v);
          const dot = createElement('circle', {
            cx: x,
            cy: y,
            r: 3.5,
            fill: s.color,
            stroke: '#ffffff',
            'stroke-width': 1
          });
          svg.appendChild(dot);
        });
      });
    };

    drawRadarChart();
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.pickaxe}></span>
          <span>Strike48 • Agentic Log Management</span>
        </div>
        <div className={styles.hero}>
          <h1>Agentic Log Management vs. Point Solutions</h1>
          <p className={styles.lead}>
            From collecting and visualizing logs to <em>orchestrating outcomes</em> with specialized AI agents. 
            Compare agentic teams to SIEM, Observability/APM, Data Lakes, and SOAR.
          </p>
          {/* <div className={styles.ctaRow}>
            <a className={styles.btn} href="#comparison">View Comparison</a>
            <a className={`${styles.btn} ${styles.alt}`} href="#definition">Read Definition</a>
          </div> */}
        </div>
      </header>

      {/* Main */}
      <main className={styles.main}>
        {/* Definition */}
        <section id="definition" className={styles.grid}>
          <div className={styles.card}>
            <h2>Definition & Introduction</h2>
            <p>
              Agentic Log Management replaces siloed tools with a collaborative team of purpose-built AI agents 
              that monitor, investigate, and <strong>remediate</strong> across your stack.
            </p>
            <div className={styles.kpis}>
              <div className={styles.kpi}>
                <div className={styles.big}>↓ 60–80%</div>
                <div>Mean time to resolve (with automation)</div>
              </div>
              <div className={styles.kpi}>
                <div className={styles.big}>↑ 30–50%</div>
                <div>Coverage from cross-domain correlation</div>
              </div>
            </div>
            <h3>Why it matters</h3>
            <ul>
              <li><strong>Faster outcomes:</strong> Agents execute playbooks end-to-end.</li>
              <li><strong>Lower cost:</strong> Pay for <em>decisions</em>, not raw storage.</li>
              <li><strong>Less training:</strong> Natural-language workflows.</li>
              <li><strong>Fewer tools:</strong> Replace stacks with one coordinated team.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>How it works</h2>
            <ul>
              <li><strong>Specialized agents</strong> for detection & remediation.</li>
              <li><strong>Policy guardrails</strong> for safe automation.</li>
              <li><strong>Memory & context</strong> for learning from incidents.</li>
              <li><strong>Human-in-the-loop</strong> for oversight & rollback.</li>
            </ul>
          </div>
        </section>

        {/* Comparison Radar */}
        <section id="comparison" className={styles.card}>
          <h2>Comparison Radar</h2>
          <p className={styles.lead}>Scores are illustrative (0–10, higher is better).</p>
          <div className={styles.radarWrap}>
            <svg id="radar" viewBox="0 0 650 650" className={styles.radar}></svg>
          </div>

          {/* Legend */}
          <div className={styles.legend}>
            <label><span className={`${styles.dot} ${styles.agentic}`}></span><span>Agentic LM</span></label>
            <label><span className={`${styles.dot} ${styles.siem}`}></span><span>SIEM</span></label>
            <label><span className={`${styles.dot} ${styles.obs}`}></span><span>Observability/APM</span></label>
            <label><span className={`${styles.dot} ${styles.datalake}`}></span><span>Data Lake</span></label>
            <label><span className={`${styles.dot} ${styles.soar}`}></span><span>SOAR</span></label>
          </div>
        </section>

        {/* Key Takeaways - Only one card now */}
        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>Key Takeaways</h2>
            <ul>
              <li><strong>Agentic LM</strong> excels in automation and speed.</li>
              <li><strong>SIEM</strong> is strong in auditability but slower.</li>
              <li><strong>Observability/APM</strong> good for telemetry, less for security.</li>
              <li><strong>Data Lakes</strong> excel in storage, weaker in correlation.</li>
              <li><strong>SOAR</strong> depends on integration quality.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}