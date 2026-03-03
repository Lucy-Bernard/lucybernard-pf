import { useEffect } from "react";
import { Link } from "react-router";
import "../../styles/farmart.css";
export default function FarMartShowcase() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("fm-visible");
        });
      },
      { threshold: 0.07 },
    );
    document
      .querySelectorAll(".fm-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fm-farmart-showcase-body">
        {/* Topbar */}
        <nav className="fm-topbar">
          <Link to="/projects" className="back-link">
            ← Portfolio
          </Link>
          <span className="topbar-right">
            FarMarT · University of Nebraska–Lincoln · v6.0
          </span>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div>
            <div className="hero-eyebrow">
              <div className="eyebrow-line"></div>
              <span className="eyebrow-text">
                Java · SQL · OOP · Data Structures · UNL CS
              </span>
            </div>
            <h1 className="hero-title flex">
              FarMar<span style={{ color: "var(--sage-dim)" }}>T</span>
            </h1>
            <p className="hero-subtitle">Sales System Design — Version 6.0</p>
            <p className="hero-desc">
              A database-backed sales subsystem for a regional farm equipment
              chain, built on Object-Oriented Programming and RDBMS principles.
              Tracks and reports all sales of farm equipment, products, and
              service contracts across FMT stores.
            </p>
            <div className="hero-meta">
              <span className="meta-chip sage">Java</span>
              <span className="meta-chip sage">SQL / JDBC</span>
              <span className="meta-chip sage">JSON / Gson</span>
              <span className="meta-chip paper">OOP Design</span>
              <span className="meta-chip paper">UML</span>
              <span className="meta-chip paper">3NF Database</span>
              <span className="meta-chip rust">Terminal Output</span>
              <span className="meta-chip rust">UNL · 2023</span>
            </div>
          </div>

          {/* Terminal Preview */}
          <div className="hero-terminal">
            <div className="terminal-bar">
              <div className="t-dot"></div>
              <div className="t-dot"></div>
              <div className="t-dot"></div>
              <span className="terminal-title">FarMarT — Sales Report</span>
            </div>
            <div className="terminal-body">
              <span className="t-line">
                <span className="t-prompt">$</span>{" "}
                <span className="t-cmd">java FarMarT</span>
              </span>
              <span className="t-blank"></span>
              <span className="t-line t-head">
                +=================================================+
              </span>
              <span className="t-line t-head">| Summary of all Sales |</span>
              <span className="t-line t-head">
                +=================================================+
              </span>
              <span className="t-line t-out">
                Store | Sales | Grand Total | Tax
              </span>
              <span className="t-line t-sep">
                ----------+-------+--------------+---------
              </span>
              <span className="t-line">
                <span className="t-val">
                  FMT-001 | 12 | $ 48,320.75 | $ 2,140.38
                </span>
              </span>
              <span className="t-line">
                <span className="t-val">
                  FMT-002 | 8 | $ 31,005.00 | $ 1,420.20
                </span>
              </span>
              <span className="t-line">
                <span className="t-val">
                  FMT-003 | 15 | $ 72,450.60 | $ 3,812.45
                </span>
              </span>
              <span className="t-line t-sep">
                ----------+-------+--------------+---------
              </span>
              <span className="t-line t-hi">
                Total | 35 | $151,776.35 | $ 7,373.03
              </span>
              <span className="t-blank"></span>
              <span className="t-line t-head">
                +--- Sorted by Invoice Value (desc) ------------+
              </span>
              <span className="t-line t-out">
                INV-4821 Anderson, M. FMT-003 $18,250.00
              </span>
              <span className="t-line t-out">
                INV-4799 Brooks, T. FMT-001 $14,320.75
              </span>
              <span className="t-line t-out">
                INV-4815 Chen, W. FMT-003 $ 9,440.60
              </span>
              <span className="t-line t-out">...</span>
              <span className="t-blank"></span>
              <span className="t-line">
                <span className="t-prompt">$</span>{" "}
                <span className="t-cmd">_</span>
              </span>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="stats-bar reveal">
          <div className="stat-cell">
            <div className="stat-value">6</div>
            <div className="stat-label">Dev Phases</div>
          </div>
          <div className="stat-cell">
            <div className="stat-value">3NF</div>
            <div className="stat-label">DB Normal Form</div>
          </div>
          <div className="stat-cell">
            <div className="stat-value">17+</div>
            <div className="stat-label">Java Classes</div>
          </div>
          <div className="stat-cell">
            <div className="stat-value">3</div>
            <div className="stat-label">Report Types</div>
          </div>
          <div className="stat-cell">
            <div className="stat-value">v6.0</div>
            <div className="stat-label">Final Version</div>
          </div>
        </div>

        {/* Phases */}
        <section className="phases-band">
          <div className="section reveal">
            <div className="section-eyebrow">Development</div>
            <h2 className="section-title">
              Built in <em>6 phases</em>
            </h2>
            <div className="phases-grid">
              <div className="phase-card reveal reveal-d1">
                <div className="phase-num">Phase 01</div>
                <div className="phase-title">CSV → JSON Conversion</div>
                <p className="phase-body">
                  Parses flat CSV files into Java objects (People, Stores,
                  Items), then serializes them to platform-independent JSON
                  using the Gson library.
                </p>
                <div className="phase-tags">
                  <span className="phase-tag">CSV Parser</span>
                  <span className="phase-tag">Gson</span>
                  <span className="phase-tag">JSON</span>
                </div>
              </div>
              <div className="phase-card reveal reveal-d2">
                <div className="phase-num">Phase 02</div>
                <div className="phase-title">Report Generation</div>
                <p className="phase-body">
                  Loads CSV data into Java objects and generates 3 report types:
                  all-sales summary, per-store summary, and individual invoice
                  detail.
                </p>
                <div className="phase-tags">
                  <span className="phase-tag">OOP Design</span>
                  <span className="phase-tag">Report Gen</span>
                  <span className="phase-tag">Sales Data</span>
                </div>
              </div>
              <div className="phase-card reveal reveal-d3">
                <div className="phase-num">Phase 03</div>
                <div className="phase-title">SQL Database Design</div>
                <p className="phase-body">
                  Designs and implements the RDBMS to back the application.
                  Produces an ER diagram showing tables and relations,
                  conforming to 3NF for data integrity.
                </p>
                <div className="phase-tags">
                  <span className="phase-tag">SQL</span>
                  <span className="phase-tag">ER Diagram</span>
                  <span className="phase-tag">3NF</span>
                </div>
              </div>
              <div className="phase-card reveal reveal-d1">
                <div className="phase-num">Phases 04 & 05</div>
                <div className="phase-title">JDBC Integration</div>
                <p className="phase-body">
                  Replaces flat CSV files with database persistence. Factory
                  methods retrieve class instances via JDBC, enabling efficient
                  data management and improved integrity.
                </p>
                <div className="phase-tags">
                  <span className="phase-tag">JDBC</span>
                  <span className="phase-tag">Connector/J</span>
                  <span className="phase-tag">Factory Methods</span>
                </div>
              </div>
              <div className="phase-card reveal reveal-d2">
                <div className="phase-num">Phase 06</div>
                <div className="phase-title">Custom Data Structure</div>
                <p className="phase-body">
                  Implements a generic Linked List (FMTList) with parameterized
                  sorting via Comparator. Supports ordering invoices by customer
                  name, total value, or store/salesperson.
                </p>
                <div className="phase-tags">
                  <span className="phase-tag">Linked List</span>
                  <span className="phase-tag">Generics</span>
                  <span className="phase-tag">Comparator</span>
                </div>
              </div>
              <div className="phase-card reveal reveal-d3">
                <div className="phase-num">Scope Note</div>
                <div className="phase-title">Out of Scope</div>
                <p className="phase-body">
                  A web-based storefront for customer purchases was identified
                  as a future feature but excluded from this project — a
                  deliberate scoping decision documented in the design.
                </p>
                <div className="phase-tags">
                  <span className="phase-tag">Design Decision</span>
                  <span className="phase-tag">Scoping</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="arch-band">
          <div className="section reveal">
            <div className="section-eyebrow">Architecture</div>
            <h2 className="section-title">
              System <em>class design</em>
            </h2>
            <div className="arch-layout">
              <div>
                <div className="arch-layers">
                  <div className="arch-layer">
                    <div className="arch-layer-label">Input</div>
                    <div className="arch-layer-items">
                      <span className="arch-item hi">CSVParser</span>
                      <span className="arch-item hi">DataConverter</span>
                      <span className="arch-item">5x CSV Files</span>
                      <span className="arch-item">JSON</span>
                    </div>
                  </div>
                  <div className="arch-connector"></div>
                  <div className="arch-layer">
                    <div className="arch-layer-label">DB Layer</div>
                    <div className="arch-layer-items">
                      <span className="arch-item hi">DatabaseLoader</span>
                      <span className="arch-item hi">DatabaseConnection</span>
                      <span className="arch-item">InvoiceData</span>
                      <span className="arch-item">Connector/J</span>
                    </div>
                  </div>
                  <div className="arch-connector"></div>
                  <div className="arch-layer">
                    <div className="arch-layer-label">Domain</div>
                    <div className="arch-layer-items">
                      <span className="arch-item hi">Person</span>
                      <span className="arch-item hi">Store</span>
                      <span className="arch-item hi">Invoice</span>
                      <span className="arch-item">Address</span>
                      <span className="arch-item">Item</span>
                    </div>
                  </div>
                  <div className="arch-connector"></div>
                  <div className="arch-layer">
                    <div className="arch-layer-label">Items</div>
                    <div className="arch-layer-items">
                      <span className="arch-item hi">Product</span>
                      <span className="arch-item hi">Service</span>
                      <span className="arch-item hi">Equipment</span>
                      <span className="arch-item">Purchase</span>
                      <span className="arch-item">Lease</span>
                    </div>
                  </div>
                  <div className="arch-connector"></div>
                  <div className="arch-layer">
                    <div className="arch-layer-label">Structures</div>
                    <div className="arch-layer-items">
                      <span className="arch-item hi">FMTList&lt;T&gt;</span>
                      <span className="arch-item">FMTNode</span>
                      <span className="arch-item">SortByName</span>
                      <span className="arch-item">SortByStore</span>
                      <span className="arch-item">SortByValue</span>
                    </div>
                  </div>
                  <div className="arch-connector"></div>
                  <div className="arch-layer">
                    <div className="arch-layer-label">Output</div>
                    <div className="arch-layer-items">
                      <span className="arch-item hi">ReportGenerator</span>
                      <span className="arch-item">stdout</span>
                      <span className="arch-item">Sales Summary</span>
                      <span className="arch-item">Store Report</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="arch-prose">
                <h3>Separation of Concerns</h3>
                <p>
                  Each layer has a clearly defined responsibility. The input
                  layer handles parsing and conversion. The database layer
                  manages persistence and retrieval. Domain classes model the
                  business entities. The output layer generates formatted
                  reports to standard output.
                </p>
                <p>
                  The design considered an alternative single-interface approach
                  for parsing and serializing but rejected it to uphold the{" "}
                  <strong>Single Responsibility Principle</strong> — a
                  documented architectural decision.
                </p>
                <div className="class-groups">
                  <div className="class-group">
                    <div className="class-group-label">Pricing Rules</div>
                    <div className="class-list">
                      <span className="class-item">
                        Product: unit_price × qty + 7.15% tax
                      </span>
                    </div>
                    <div className="class-list" style={{ marginTop: "5px" }}>
                      <span className="class-item">
                        Service: hourly_rate × hours + 3.45% tax
                      </span>
                    </div>
                    <div className="class-list" style={{ marginTop: "5px" }}>
                      <span className="class-item">
                        Equipment: flat price (Purchase)
                      </span>
                    </div>
                    <div className="class-list" style={{ marginTop: "5px" }}>
                      <span className="class-item">
                        Lease: tiered tax (&lt;$10k / $10k–$100k / &gt;$100k)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Database */}
        <section className="db-band">
          <div className="section reveal">
            <div className="section-eyebrow">Database</div>
            <h2 className="section-title">
              3NF <em>relational design</em>
            </h2>
            <div className="db-layout">
              <div className="db-tables">
                <div className="db-table">
                  <div className="db-table-header">
                    <span className="db-table-name">Person</span>
                    <span className="db-table-badge">Entity</span>
                  </div>
                  <div className="db-table-fields">
                    <span className="db-field pk">personId PK</span>
                    <span className="db-field">firstName</span>
                    <span className="db-field">lastName</span>
                    <span className="db-field">email</span>
                    <span className="db-field fk">addressId FK</span>
                  </div>
                </div>
                <div className="db-table">
                  <div className="db-table-header">
                    <span className="db-table-name">Store</span>
                    <span className="db-table-badge">Entity</span>
                  </div>
                  <div className="db-table-fields">
                    <span className="db-field pk">storeId PK</span>
                    <span className="db-field">storeCode</span>
                    <span className="db-field fk">managerId FK</span>
                    <span className="db-field fk">addressId FK</span>
                  </div>
                </div>
                <div className="db-table">
                  <div className="db-table-header">
                    <span className="db-table-name">Invoice</span>
                    <span className="db-table-badge">Transaction</span>
                  </div>
                  <div className="db-table-fields">
                    <span className="db-field pk">invoiceId PK</span>
                    <span className="db-field">invoiceCode</span>
                    <span className="db-field fk">storeId FK</span>
                    <span className="db-field fk">customerId FK</span>
                    <span className="db-field fk">salespersonId FK</span>
                    <span className="db-field">invoiceDate</span>
                  </div>
                </div>
                <div className="db-table">
                  <div className="db-table-header">
                    <span className="db-table-name">Item</span>
                    <span className="db-table-badge">Entity</span>
                  </div>
                  <div className="db-table-fields">
                    <span className="db-field pk">itemId PK</span>
                    <span className="db-field">itemCode</span>
                    <span className="db-field">type</span>
                    <span className="db-field">name</span>
                    <span className="db-field">unitPrice / hourlyRate</span>
                  </div>
                </div>
                <div className="db-table">
                  <div className="db-table-header">
                    <span className="db-table-name">InvoiceItem</span>
                    <span className="db-table-badge">Junction</span>
                  </div>
                  <div className="db-table-fields">
                    <span className="db-field pk">invoiceItemId PK</span>
                    <span className="db-field fk">invoiceId FK</span>
                    <span className="db-field fk">itemId FK</span>
                    <span className="db-field">quantity / hours</span>
                  </div>
                </div>
                <div className="db-table">
                  <div className="db-table-header">
                    <span className="db-table-name">Address</span>
                    <span className="db-table-badge">Shared</span>
                  </div>
                  <div className="db-table-fields">
                    <span className="db-field pk">addressId PK</span>
                    <span className="db-field">street</span>
                    <span className="db-field">city</span>
                    <span className="db-field">state</span>
                    <span className="db-field">zip</span>
                    <span className="db-field">country</span>
                  </div>
                </div>
              </div>
              <div className="db-principles">
                <div className="db-principle">
                  <div className="db-principle-title">
                    Third Normal Form (3NF)
                  </div>
                  <p className="db-principle-body">
                    All tables have no repeating groups and non-key attributes
                    are fully dependent on primary keys — not on other non-key
                    attributes. This eliminates redundancy and ensures data
                    integrity across the system.
                  </p>
                </div>
                <div className="db-principle">
                  <div className="db-principle-title">
                    Referential Integrity
                  </div>
                  <p className="db-principle-body">
                    Foreign keys enforce relationships between tables. The
                    InvoiceItem junction table handles the many-to-many
                    relationship between Invoices and Items, keeping the model
                    clean.
                  </p>
                </div>
                <div className="db-principle">
                  <div className="db-principle-title">
                    SQL Exception Handling
                  </div>
                  <p className="db-principle-body">
                    The API guards against SQL exceptions and runtime crashes,
                    validates data types and null values, and checks for
                    duplicate keys before insertion operations.
                  </p>
                </div>
                <div className="db-principle">
                  <div className="db-principle-title">
                    Testing via SQL Inserts
                  </div>
                  <p className="db-principle-body">
                    Database accuracy is verified by manually inserting data
                    through SQL queries, validating person records, store
                    details, item data, invoice records, and invoice-item
                    relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Structures */}
        <section className="ds-band">
          <div className="section reveal">
            <div className="section-eyebrow">Data Structures</div>
            <h2 className="section-title">
              Custom <em>generic linked list</em>
            </h2>
            <div className="ds-grid">
              <div className="ds-card reveal reveal-d1">
                <div className="ds-card-label">Core Structure</div>
                <div className="ds-card-class">FMTList&lt;T&gt;</div>
                <p className="ds-card-body">
                  Generic linked list that stores and sorts any type. Provides
                  add, remove, retrieve, count, and print operations. Selected
                  for O(1) insertion and dynamic resizing without reallocation.
                </p>
              </div>
              <div className="ds-card reveal reveal-d2">
                <div className="ds-card-label">Node</div>
                <div className="ds-card-class">FMTNode&lt;T&gt;</div>
                <p className="ds-card-body">
                  Internal node class linking list elements. Holds the data and
                  a reference to the next node, forming the backbone of the
                  linked chain.
                </p>
              </div>
              <div className="ds-card reveal reveal-d3">
                <div className="ds-card-label">Sort by</div>
                <div className="ds-card-class">SortByName</div>
                <p className="ds-card-body">
                  Implements Comparator to order invoices alphabetically by
                  customer last name. Passed into FMTList to produce
                  name-ordered reports.
                </p>
              </div>
              <div className="ds-card reveal reveal-d1">
                <div className="ds-card-label">Sort by</div>
                <div className="ds-card-class">SortByValue</div>
                <p className="ds-card-body">
                  Implements Comparator to order invoices by total value,
                  enabling highest-value-first reporting for management
                  analysis.
                </p>
              </div>
              <div className="ds-card reveal reveal-d2">
                <div className="ds-card-label">Sort by</div>
                <div className="ds-card-class">SortByStore</div>
                <p className="ds-card-body">
                  Implements Comparator to group and sort invoices by store code
                  and salesperson, enabling per-store breakdowns in reports.
                </p>
              </div>
              <div className="ds-card reveal reveal-d3">
                <div className="ds-card-label">Why Linked List?</div>
                <div className="ds-card-class">Design Rationale</div>
                <p className="ds-card-body">
                  Resizes without reallocation, efficient add/remove, maintains
                  insertion order, and flexible enough to work with any sorting
                  algorithm FMT may require.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal output section */}
        <section className="terminal-section">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="section-eyebrow reveal">Output Format</div>
            <h2 className="section-title reveal">
              Reports printed to <em>standard output</em>
            </h2>
            <div className="terminal-grid">
              <div className="terminal-window reveal reveal-d1">
                <div className="terminal-bar">
                  <div className="t-dot"></div>
                  <div className="t-dot"></div>
                  <div className="t-dot"></div>
                  <span className="terminal-title">
                    All Sales — Summary Report
                  </span>
                </div>
                <div className="terminal-body">
                  <span className="t-line t-head">
                    +==============================================+
                  </span>
                  <span className="t-line t-head">
                    | Summary of all Sales |
                  </span>
                  <span className="t-line t-head">
                    +==============================================+
                  </span>
                  <span className="t-line t-out">
                    Store Mgr # Sales Grand Total
                  </span>
                  <span className="t-line t-sep">
                    ------ --------------------- ------ -----------
                  </span>
                  <span className="t-line">
                    <span className="t-val">
                      FMT001 Myers, Pablo 12 $ 48,320.75
                    </span>
                  </span>
                  <span className="t-line">
                    <span className="t-val">
                      FMT002 Rodgers, Clara 8 $ 31,005.00
                    </span>
                  </span>
                  <span className="t-line">
                    <span className="t-val">
                      FMT003 Hoffman, Raul 15 $ 72,450.60
                    </span>
                  </span>
                  <span className="t-blank"></span>
                  <span className="t-line t-hi"> Total: 35 $151,776.35</span>
                </div>
              </div>
              <div className="terminal-window reveal reveal-d2">
                <div className="terminal-bar">
                  <div className="t-dot"></div>
                  <div className="t-dot"></div>
                  <div className="t-dot"></div>
                  <span className="terminal-title">Invoice Detail Report</span>
                </div>
                <div className="terminal-body">
                  <span className="t-line t-head">Invoice #INV-4821</span>
                  <span className="t-line t-out">Store: FMT-003</span>
                  <span className="t-line t-out">
                    Customer: Anderson, Marcus
                  </span>
                  <span className="t-line t-out">Salesperson: Chen, Wei</span>
                  <span className="t-line t-out">Date: 2023-04-15</span>
                  <span className="t-blank"></span>
                  <span className="t-line t-sep">Item Type Qty Unit Total</span>
                  <span className="t-line t-sep">
                    ------------------- ----- --- ------ --------
                  </span>
                  <span className="t-line">
                    <span className="t-val">
                      Fertilizer Spreader Equip -- $8,400 $ 8,400.00
                    </span>
                  </span>
                  <span className="t-line">
                    <span className="t-val">
                      Soil Analysis Svc Svc 4h $ 200 $ 827.60
                    </span>
                  </span>
                  <span className="t-line">
                    <span className="t-val">
                      Corn Seed (50 lbs) Prod 10 $ 102 $ 1,093.15
                    </span>
                  </span>
                  <span className="t-blank"></span>
                  <span className="t-line t-out"> Subtotal: $ 17,200.00</span>
                  <span className="t-line t-out"> Tax: $ 1,050.00</span>
                  <span className="t-line t-hi">Grand Total: $ 18,250.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section className="testing-band">
          <div className="section reveal">
            <div className="section-eyebrow">Testing</div>
            <h2 className="section-title">
              Component <em>testing strategy</em>
            </h2>
            <div className="testing-grid">
              <div className="test-card reveal reveal-d1">
                <div className="test-card-num">01 — CSV / Parser</div>
                <div className="test-card-title">File Parsing Verification</div>
                <p className="test-card-body">
                  5 CSV files verify the parsers are reading in data accurately
                  and outputting in organized, consistent format. A TXT file
                  simulates expected report output.
                </p>
                <ul className="test-card-items">
                  <li>Validate Java object construction from raw CSV</li>
                  <li>Confirm JSON serialization round-trip accuracy</li>
                  <li>Check output matches expected TXT format</li>
                </ul>
              </div>
              <div className="test-card reveal reveal-d2">
                <div className="test-card-num">02 — Database</div>
                <div className="test-card-title">SQL Insert Testing</div>
                <p className="test-card-body">
                  Manual SQL queries verify that data is correctly stored and
                  managed across all tables and relationships.
                </p>
                <ul className="test-card-items">
                  <li>Remove records → test data loading resilience</li>
                  <li>Insert invalid types → verify error messages</li>
                  <li>
                    Insert inconsistent records → test issue identification
                  </li>
                  <li>
                    Insert invalid foreign keys → check violation handling
                  </li>
                  <li>Large-scale data → evaluate performance</li>
                </ul>
              </div>
              <div className="test-card reveal reveal-d1">
                <div className="test-card-num">03 — Linked List</div>
                <div className="test-card-title">Data Structure Testing</div>
                <p className="test-card-body">
                  Utility methods are called and list contents printed to stdout
                  to verify add, remove, and update behavior.
                </p>
                <ul className="test-card-items">
                  <li>Comparator objects test sorting by name, value, store</li>
                  <li>Invalid data and null values verify error handling</li>
                  <li>
                    Confirms generic type compatibility with invoice objects
                  </li>
                </ul>
              </div>
              <div className="test-card reveal reveal-d2">
                <div className="test-card-num">04 — Integration</div>
                <div className="test-card-title">End-to-End Verification</div>
                <p className="test-card-body">
                  The full pipeline is exercised: CSV/DB input → object
                  construction → report generation → stdout output, with the
                  expected TXT output as the ground truth.
                </p>
                <ul className="test-card-items">
                  <li>All 3 report types match expected format</li>
                  <li>Tax calculations verified per item type</li>
                  <li>Sort order consistent across all Comparators</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Revision history */}
        <section className="revision-band">
          <div className="section reveal">
            <div className="section-eyebrow">Documentation</div>
            <h2 className="section-title">
              Revision <em>history</em>
            </h2>
            <table className="revision-table">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Changes</th>
                  <th>Author</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="rev-version">v1.0</span>
                  </td>
                  <td>Initial design document draft</td>
                  <td>Lucy Bernard</td>
                  <td>2023-02-13</td>
                </tr>
                <tr>
                  <td>
                    <span className="rev-version">v2.0</span>
                  </td>
                  <td>Introduction, Scope, Abstraction, and UML changes</td>
                  <td>Lucy Bernard</td>
                  <td>2023-03-03</td>
                </tr>
                <tr>
                  <td>
                    <span className="rev-version">v3.0</span>
                  </td>
                  <td>
                    Sections 1.1, 1.3, 1.3.1, 1.3.2, Section 2 and all of
                    Section 3
                  </td>
                  <td>Lucy Bernard</td>
                  <td>2023-03-24</td>
                </tr>
                <tr>
                  <td>
                    <span className="rev-version">v4.0</span>
                  </td>
                  <td>Sections 1.3, 2.1, and Section 3 changes</td>
                  <td>Lucy Bernard</td>
                  <td>2023-04-07</td>
                </tr>
                <tr>
                  <td>
                    <span className="rev-version">v5.0</span>
                  </td>
                  <td>
                    Sections 3.2.15, 3.2.1.6, 3.3, 3.3.1, Section 3.4 changes
                  </td>
                  <td>Lucy Bernard</td>
                  <td>2023-04-21</td>
                </tr>
                <tr>
                  <td>
                    <span className="rev-version">v6.0</span>
                  </td>
                  <td>Sections 1, 2, 3 &amp; 4 — final version</td>
                  <td>Lucy Bernard</td>
                  <td>2023-05-10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section reveal">
          <div className="cta-label">
            University of Nebraska–Lincoln · Dept. of CS&amp;E
          </div>
          <h2 className="cta-title">
            Want to see
            <br />
            the <em>code?</em>
          </h2>
          <p className="cta-tagline">
            Full source and design documentation available on GitHub.
          </p>
          <div className="cta-buttons">
            <a
              href="https://github.com/Lucy-Bernard/Farmart"
              target="_blank"
              className="btn btn-primary"
            >
              View on GitHub ↗
            </a>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-name">Lucy Bernard</div>
          <div className="footer-meta">
            FarMarT · UNL CS&amp;E · Java · SQL · v6.0 · 2023
          </div>
        </footer>
      </div>
    </>
  );
}
