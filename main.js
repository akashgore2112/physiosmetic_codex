import { PainAssessmentAI } from './core.js';

if (!window.PAIN_ASSESSMENT_OPENAI_KEY) {
  console.warn(
    '[PainAssessment] ⚠️ No API key detected. Please ensure the key is injected before loading main.js.'
  );
}

window.addEventListener('load', () => {
  const painAssessment = new PainAssessmentAI({
    containerId: 'pain-assessment',
    language: 'en',
    theme: 'dark',
    openAIKey: window.PAIN_ASSESSMENT_OPENAI_KEY || null,
  });

  painAssessment.init();
  window.painAssessment = painAssessment;
});
