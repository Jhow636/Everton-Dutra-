'use client';

import { useState } from 'react';

type Modality = 'Online' | 'Presencial';

export default function BookingSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [modality, setModality] = useState<Modality>('Online');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, Everton! Gostaria de agendar uma primeira escuta.\n\nNome: ${name}\nE-mail: ${email}${phone ? `\nTelefone: ${phone}` : ''}\nModalidade: ${modality}${message ? `\n\nMensagem: ${message}` : ''}`
    );
    window.open(`https://wa.me/5531995563539?text=${text}`, '_blank', 'noopener,noreferrer');
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="form-success">
        <h3 className="h-2" style={{ fontSize: '22px' }}>Mensagem enviada ✓</h3>
        <p>Você foi redirecionado para o WhatsApp. Caso não tenha aberto, clique no botão flutuante abaixo.</p>
        <button
          className="btn ghost"
          style={{ alignSelf: 'flex-start', marginTop: '8px' }}
          onClick={() => setSuccess(false)}
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <div className="booking-grid">
      {/* Info side */}
      <div className="booking-side">
        <p className="lede">
          A primeira sessão é uma escuta inicial — sem compromisso, sem julgamento.
          Um espaço para que possamos nos encontrar.
        </p>

        <div className="booking-info">
          <div className="booking-info-row">
            <span className="bi-label">E-mail</span>
            <span className="bi-value">
              <a href="mailto:E.dutra2101@gmail.com">E.dutra2101@gmail.com</a>
            </span>
          </div>
          <div className="booking-info-row">
            <span className="bi-label">Telefone</span>
            <span className="bi-value">
              <a href="https://wa.me/5531995563539">+55 31 99556-3539</a>
            </span>
          </div>
          <div className="booking-info-row">
            <span className="bi-label">Consultório</span>
            <span className="bi-value">Belo Horizonte / MG</span>
          </div>
          <div className="booking-info-row">
            <span className="bi-label">Horários</span>
            <span className="bi-value">Seg — Sex, 09h às 20h</span>
          </div>
          <div className="booking-info-row">
            <span className="bi-label">Online</span>
            <span className="bi-value">Disponível para o Brasil e exterior</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row two">
          <div className="form-row">
            <label htmlFor="bk-name">Nome *</label>
            <input
              id="bk-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
            />
          </div>
          <div className="form-row">
            <label htmlFor="bk-email">E-mail *</label>
            <input
              id="bk-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="bk-phone">Telefone (opcional)</label>
          <input
            id="bk-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+55 (31) 9 0000-0000"
          />
        </div>

        <div className="form-row">
          <label>Modalidade</label>
          <div className="modality">
            {(['Online', 'Presencial'] as Modality[]).map((m) => (
              <label key={m}>
                <input
                  type="radio"
                  name="modality"
                  value={m}
                  checked={modality === m}
                  onChange={() => setModality(m)}
                />
                {m}
              </label>
            ))}
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="bk-msg">Mensagem (opcional)</label>
          <textarea
            id="bk-msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Conte brevemente o que te traz à psicanálise..."
          />
        </div>

        <button type="submit" className="btn" style={{ alignSelf: 'flex-start' }}>
          Agendar primeira escuta →
        </button>
      </form>
    </div>
  );
}
