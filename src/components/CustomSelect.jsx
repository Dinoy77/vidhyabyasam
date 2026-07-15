import React, { useState, useRef, useEffect } from 'react';

/**
 * CustomSelect
 *
 * A dropdown that looks and behaves like a <select>, but is built entirely
 * with our own markup/CSS instead of the browser's native dropdown list.
 *
 * WHY: native <select> dropdowns are rendered by the browser/OS, not by
 * our CSS — on some browsers (including desktop Chrome, even in mobile
 * emulation) the popup list sizes itself to the longest option text and
 * can render wider than the screen. This component guarantees the list
 * never exceeds the width of its own trigger button, on any device.
 *
 * Props:
 *   value       — currently selected value (string)
 *   onChange    — called with the new value when an option is picked
 *   options     — array of { value, label } OR array of plain strings
 *   placeholder — optional label shown when nothing matches (rarely needed)
 */
export default function CustomSelect({ value, onChange, options, style }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Normalise options to { value, label }
  const normalized = options.map(opt =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );
  const selected = normalized.find(o => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%', ...style }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={styles.trigger}
      >
        <span style={styles.triggerText}>{selected ? selected.label : 'Select...'}</span>
        <span style={{ ...styles.arrow, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
      </button>

      {open && (
        <div style={styles.menu}>
          {normalized.map(opt => (
            <div
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              style={{
                ...styles.option,
                ...(opt.value === value ? styles.optionActive : {}),
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  trigger: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '11px 14px',
    borderRadius: '10px',
    border: '1.5px solid var(--border)',
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
    cursor: 'pointer',
    textAlign: 'left',
    color: '#0F172A',
  },
  triggerText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  arrow: {
    fontSize: '11px',
    color: 'var(--muted)',
    flexShrink: 0,
    transition: 'transform 0.15s',
  },
  menu: {
    position: 'absolute',
    top: 'calc(100% + 6px)',
    left: 0,
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    maxHeight: '260px',
    overflowY: 'auto',
    background: '#fff',
    border: '1.5px solid var(--border)',
    borderRadius: '10px',
    boxShadow: '0 12px 32px rgba(0,0,0,0.14)',
    zIndex: 50,
  },
  option: {
    padding: '11px 14px',
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
    color: '#0F172A',
    cursor: 'pointer',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    lineHeight: 1.4,
    borderBottom: '1px solid #F5F5F5',
  },
  optionActive: {
    background: 'var(--cream, #FAF9F5)',
    color: 'var(--accent)',
    fontWeight: 700,
  },
};