import React, { useState } from 'react';
import { slotNumber } from '../utils/slots.js';

export default function SearchPage({ breakers, results, onSearch, onSelectBreaker }) {
  const [query, setQuery] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <p className="eyebrow">Search</p>
          <h2>Find breakers or devices</h2>
        </div>
      </div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          placeholder="Search garage sconces, breaker A1…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="stack gap-md">
        <section>
          <p className="eyebrow">Breakers</p>
          {results.breakers?.length ? (
            <div className="stack gap-sm">
              {results.breakers.map((b) => (
                <div key={b.id} className="chip subtle" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', padding: '10px 14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <button className="chip" style={{ background: 'var(--color-accent)', color: '#050a14', fontWeight: '700' }} onClick={() => onSelectBreaker(b.id)}>
                      #{slotNumber(b)}{b.side} • {b.label}
                    </button>
                  </div>
                  {b.notes && <p className="muted" style={{ fontSize: '0.85rem', margin: '2px 0 0 4px' }}>{b.notes}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p className="muted">No breaker matches.</p>
          )}
        </section>

        <section>
          <p className="eyebrow">Devices</p>
          {results.devices?.length ? (
            <div className="stack gap-sm">
              {results.devices.map((d) => (
                <div key={d.id} className="chip subtle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '8px 12px' }}>
                  <span>{d.name}</span>
                  <div className="pill-list">
                    {d.linked_breakers?.length ? d.linked_breakers.map(bid => {
                      const b = (breakers || []).find(br => br.id === bid);
                      return (
                        <span key={bid} className="pill" style={{ fontSize: '0.7rem', color: 'var(--color-accent)', cursor: 'pointer' }} onClick={() => onSelectBreaker(bid)}>
                          {b ? `${slotNumber(b)}${b.side}` : bid}
                        </span>
                      );
                    }) : <span className="muted" style={{ fontSize: '0.7rem' }}>No link</span>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="muted">No device matches.</p>
          )}
        </section>
      </div>
    </div>
  );
}
