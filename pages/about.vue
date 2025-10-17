<template>
  <div class="container">
    <header>
      <h1>{{ pageData.header.title }}</h1>
      <NuxtLink to="/" class="back-link">{{ pageData.header.backLinkText }}</NuxtLink>
    </header>

    <main>
      <section class="content">
        <h2>{{ pageData.professionalSummary.title }}</h2>
        <p>{{ pageData.professionalSummary.content }}</p>

        <h3>{{ pageData.workExperience.title }}</h3>

        <div
          v-for="(experience, index) in pageData.workExperience.items"
          :key="index"
          class="experience-item"
        >
          <div class="experience-header" @click="toggleExperience(index)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(index) ? '▼' : '▶' }}</span>
                {{ experience.title }}
              </h4>
              <p class="company">{{ experience.company }}</p>
            </div>
            <span class="period">{{ getPeriod(experience.startDate, experience.endDate) }}</span>
          </div>
          <div v-show="isExperienceExpanded(index)" class="experience-details">
            <p v-if="experience.location" class="location">{{ experience.location }}</p>
            <p v-if="experience.jobType" class="job-type">{{ experience.jobType }}</p>
            <p v-if="experience.description">{{ experience.description }}</p>
            <p v-if="experience.projectTitle"><strong>{{ experience.projectTitle }}</strong></p>
            <ul v-if="experience.details && experience.details.length > 0">
              <li v-for="(detail, detailIndex) in experience.details" :key="detailIndex">
                {{ detail }}
              </li>
            </ul>
            <div v-if="experience.jobDescription">
              <p><strong>Job Description:</strong></p>
              <ul>
                <li v-for="(desc, descIndex) in experience.jobDescription" :key="descIndex">
                  {{ desc }}
                </li>
              </ul>
            </div>
            <div v-if="experience.experiences">
              <p><strong>Experiences:</strong></p>
              <ul>
                <li v-for="(exp, expIndex) in experience.experiences" :key="expIndex">
                  {{ exp }}
                </li>
              </ul>
            </div>
            <div v-if="experience.satellitePlatforms">
              <p><strong>Experience - Satellite Platform:</strong></p>
              <ul>
                <li v-for="(platform, platformIndex) in experience.satellitePlatforms" :key="platformIndex">
                  {{ platform }}
                </li>
              </ul>
            </div>
            <div v-if="experience.ttcSoftware">
              <p><strong>TT&C Software Product:</strong></p>
              <ul>
                <li v-for="(software, softwareIndex) in experience.ttcSoftware" :key="softwareIndex">
                  {{ software }}
                </li>
              </ul>
            </div>
            <p v-if="experience.skills"><strong>Skills:</strong> {{ experience.skills }}</p>
          </div>
        </div>

        <h3>{{ pageData.education.title }}</h3>

        <div
          v-for="(education, index) in pageData.education.items"
          :key="index"
          class="education-item"
        >
          <div class="education-header" @click="toggleEducation(index)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isEducationExpanded(index) ? '▼' : '▶' }}</span>
                {{ education.title }}
              </h4>
              <p class="school">{{ education.school }}</p>
            </div>
            <span class="period">{{ getPeriod(education.startDate, education.endDate) }}</span>
          </div>
          <div v-show="isEducationExpanded(index)" class="education-details">
            <p v-if="education.activities"><strong>Activities and societies:</strong> {{ education.activities }}</p>
            <p v-if="education.skills"><strong>Skills:</strong> {{ education.skills }}</p>
          </div>
        </div>

        <h3>{{ pageData.technicalSkills.title }}</h3>
        <div class="skills-list">
          <div
            v-for="(skillCategory, index) in pageData.technicalSkills.categories"
            :key="index"
            class="skill-item"
          >
            <div class="skill-header" @click="toggleSkill(index)" style="cursor: pointer;">
              <strong>
                <span class="toggle-icon">{{ isSkillExpanded(index) ? '▼' : '▶' }}</span>
                {{ skillCategory.name }}
              </strong>
            </div>
            <div v-show="isSkillExpanded(index)" class="skill-details">
              {{ skillCategory.skills }}
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>{{ pageData.footer.text }}</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import resumeData from '@/data/resume.json'
import { formatPeriod } from '@/utils/dateUtils'

const pageData = resumeData

useHead({
  title: pageData.seo.title,
  meta: [
    { name: 'description', content: pageData.seo.description }
  ]
})

// Track expanded state for each experience, education, and skill item
const expandedExperiences = ref({})
const expandedEducation = ref({})
const expandedSkills = ref({})

const toggleExperience = (index) => {
  expandedExperiences.value[index] = !expandedExperiences.value[index]
}

const toggleEducation = (index) => {
  expandedEducation.value[index] = !expandedEducation.value[index]
}

const toggleSkill = (index) => {
  expandedSkills.value[index] = !expandedSkills.value[index]
}

const isExperienceExpanded = (index) => !!expandedExperiences.value[index]
const isEducationExpanded = (index) => !!expandedEducation.value[index]
const isSkillExpanded = (index) => !!expandedSkills.value[index]

const getPeriod = (startDate, endDate) => {
  return formatPeriod(startDate, endDate)
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

header {
  padding: 2rem 0;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.back-link {
  color: #667eea;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

main {
  padding: 2rem 0;
}

.content {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  border-bottom: 3px solid #667eea;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.8rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

h4 {
  font-size: 1.3rem;
  margin-bottom: 0.25rem;
  color: #2c3e50;
}

p {
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

.experience-item,
.education-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
}

.experience-item:hover,
.education-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.experience-header,
.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0;
  flex-wrap: wrap;
  gap: 1rem;
  transition: all 0.2s ease;
}

.experience-header:hover,
.education-header:hover {
  color: #667eea;
}

.toggle-icon {
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 0.8em;
  color: #667eea;
  transition: transform 0.3s ease;
}

.experience-details,
.education-details {
  padding-top: 1rem;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.company,
.school {
  color: #667eea;
  font-weight: 600;
  margin: 0.25rem 0 0.5rem 0;
}

.location,
.job-type {
  color: #7f8c8d;
  font-size: 0.95rem;
  margin: 0.25rem 0;
  font-style: italic;
}

.period {
  color: #7f8c8d;
  font-weight: 500;
  white-space: nowrap;
}

ul {
  line-height: 1.8;
  color: #555;
  margin-bottom: 0;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

.certifications {
  list-style: none;
  padding-left: 0;
}

.certifications li {
  background: #f8f9fa;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #667eea;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
}

.skill-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.skill-header {
  transition: all 0.2s ease;
}

.skill-header:hover {
  color: #667eea;
}

.skill-header strong {
  color: #2c3e50;
  display: flex;
  align-items: center;
}

.skill-details {
  padding-top: 0.75rem;
  line-height: 1.8;
  color: #555;
  animation: fadeIn 0.3s ease-in-out;
}

footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid #e0e0e0;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .experience-header,
  .education-header {
    flex-direction: column;
  }

  .content {
    padding: 2rem 1.5rem;
  }
}
</style>
