export function createEducationCard(education) {
  return `
    <div class="education-card" onclick="this.classList.toggle('expanded')">
      <div class="education-header">
        <h3>${education.degree}</h3>
        <div class="expand-icon">+</div>
      </div>
      <div class="school-info">
        <span class="school">${education.school}</span>
        <span class="year">${education.year}</span>
      </div>
      <p class="description">${education.description}</p>
      <div class="education-details">
        <div class="achievements">
          <h4>Achievements</h4>
          <ul>
            ${education.achievements.map(achievement => `
              <li>${achievement}</li>
            `).join('')}
          </ul>
        </div>
        <div class="skills">
          <h4>Skills</h4>
          <div class="skill-tags">
            ${education.skills.map(skill => `
              <span class="skill-tag">${skill}</span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}