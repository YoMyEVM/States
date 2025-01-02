import React from 'react';

interface StateCardProps {
  title: string;
  description: string; // Admission date
  onClick?: () => void;
  isHighlighted?: boolean;
}

const StateCard: React.FC<StateCardProps> = ({
  title,
  description,
  onClick,
  isHighlighted = false,
}) => {
  return (
    <div
      className={`state-card ${isHighlighted ? 'highlighted' : ''}`}
      onClick={onClick}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        boxShadow: isHighlighted
          ? '0 4px 8px rgba(0, 0, 0, 0.2)'
          : '0 2px 4px rgba(0, 0, 0, 0.1)',
        cursor: onClick ? 'pointer' : 'default',
        backgroundColor: isHighlighted ? '#f0f8ff' : '#fff',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
      <p style={{ margin: 0, color: '#555' }}>{description}</p>
    </div>
  );
};

export default StateCard;
