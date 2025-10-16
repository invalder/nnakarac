<template>
  <div class="container">
    <header>
      <h1>Resume</h1>
      <NuxtLink to="/" class="back-link">← Back to Home</NuxtLink>
    </header>
    
    <main>
      <section class="content">
        <h2>Professional Summary</h2>
        <p>
          Experienced Project Manager and Technical Consultant with 10+ years of expertise in IT Project Management, Solution Architecture, and System Development. 
          Strong background in satellite systems, enterprise software, and business development with proven experience in stakeholder management, 
          technical support, and project implementation. Passionate about delivering high-quality solutions and managing complex technical projects.
        </p>
        
        <h3>Work Experience</h3>
        
        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(0)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(0) ? '▼' : '▶' }}</span>
                Co-Founder
              </h4>
              <p class="company">88 Pizza House · Self-employed</p>
            </div>
            <span class="period">Jun 2025 - Present · 5 mos</span>
          </div>
          <div v-show="isExperienceExpanded(0)" class="experience-details">
            <p class="location">Chon Buri, Thailand</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(1)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(1) ? '▼' : '▶' }}</span>
                Co-Founder
              </h4>
              <p class="company">Cake Prokfa · Self-employed</p>
            </div>
            <span class="period">Jan 2024 - Present · 1 yr 10 mos</span>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(2)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(2) ? '▼' : '▶' }}</span>
                Project Manager
              </h4>
              <p class="company">Lexnetix</p>
            </div>
            <span class="period">Sep 2022 - Present · 3 yrs 2 mos</span>
          </div>
          <div v-show="isExperienceExpanded(2)" class="experience-details">
            <p class="location">Bangkok City, Thailand · Hybrid · Full-time</p>
            <p><strong>Skills:</strong> Project Plans · Business Operations · Solution Architecture · Enterprise Software · Data Governance · IT systems development · Stakeholder Management · Presentations · Solution Selling · Project Planning · Account Management · Project Direction · Organization Skills · IT Project Management · IT Enabled Business Transformation · Attention to Detail · Software as a Service (SaaS) · Microsoft PowerPoint · Communication · PDPA · Software Architectural Design · Business Development · Technical Support · System Development · Client Relations · IT Service Management · English · Demonstration · Jira · Problem Solving · Bid Processes · Pre-Sales Support · Software Development Life Cycle (SDLC) · Project Documentation · Product Management · Project Management · Information Technology · Workflow Management · Project Implementation · Workload Prioritization · Microsoft Office · Analytical Skills · Linux</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(3)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(3) ? '▼' : '▶' }}</span>
                Technical Consultant
              </h4>
              <p class="company">Lexnetix</p>
            </div>
            <span class="period">Jun 2022 - Aug 2022 · 3 mos</span>
          </div>
          <div v-show="isExperienceExpanded(3)" class="experience-details">
            <p class="job-type">Contract</p>
            <ul>
              <li>System Analyst</li>
              <li>POC Tester</li>
              <li>User Manual Documentation</li>
              <li>Proposal Documentation</li>
            </ul>
            <p><strong>Skills:</strong> Solution Architecture · IT systems development · Stakeholder Management · Presentations · Project Planning · Project Direction · Organization Skills · IT Project Management · Jitsi · Software as a Service (SaaS) · Microsoft PowerPoint · Communication · PDPA · Software Architectural Design · Technical Support · IT Service Management · English · Demonstration · Problem Solving · Software Development Life Cycle (SDLC) · Information Technology · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(4)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(4) ? '▼' : '▶' }}</span>
                Co-investigator
              </h4>
              <p class="company">Keeta</p>
            </div>
            <span class="period">Oct 2021 - Present · 4 yrs 1 mo</span>
          </div>
          <div v-show="isExperienceExpanded(4)" class="experience-details">
            <p>KEETA PROPOSED A CONCEPT OF SUSTAINABLE BIO-CULTURE SYSTEM THAT WILL BE USE FOR THE PRODUCTION OF SPACE FOOD BY USING RESOURCES FROM ITS OWN SUB-SYSTEMS WHICH INCLUDES FOOD PROCESSING UNIT, INSECT-BASED UTILIZATION UNIT, AND PLANT-BASED UTILIZATION UNIT</p>
            <p><strong>Skills:</strong> Stakeholder Management · Presentations · Project Planning · Project Direction · Organization Skills · IT Project Management · Attention to Detail · Microsoft PowerPoint · Communication · English · Problem Solving · Project Management · Information Technology · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(5)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(5) ? '▼' : '▶' }}</span>
                Project Manager
              </h4>
              <p class="company">Sinority</p>
            </div>
            <span class="period">Nov 2022 - 2023 · 3 mos</span>
          </div>
          <div v-show="isExperienceExpanded(5)" class="experience-details">
            <p class="location">Bangkok, Bangkok City, Thailand · Full-time</p>
            <p>Sinority is a cyber securities solutions provider. We provide support to protect your business from cyberattack and data breach, we have professionals and experts who specialize in cyber defense, incident response and data protection. Our solutions cover all aspects of cyber defense, provided by highly-experienced experts and professionals. We have 3 main service areas: Prevention, Response and Investigation.</p>
            <p><strong>Skills:</strong> Stakeholder Management · Solution Selling · Project Planning · Project Direction · Organization Skills · IT Project Management · Attack Surface Management · Microsoft PowerPoint · Communication · English · Problem Solving · Project Documentation · Project Management · Information Technology · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(6)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(6) ? '▼' : '▶' }}</span>
                Technical Consultant
              </h4>
              <p class="company">BearMix</p>
            </div>
            <span class="period">Jun 2022 - Aug 2022 · 3 mos</span>
          </div>
          <div v-show="isExperienceExpanded(6)" class="experience-details">
            <p class="location">Bangkok, Bangkok City, Thailand · Part-time</p>
            <ul>
              <li>Logs Inspection and analysis</li>
              <li>Hardware Functionality Tests</li>
              <li>Bugs finder</li>
              <li>Project Management</li>
            </ul>
            <p><strong>Skills:</strong> IT systems development · Stakeholder Management · Project Planning · Project Direction · Organization Skills · IT Project Management · Microsoft PowerPoint · Communication · Technical Support · System Development · English · Demonstration · Problem Solving · Information Technology · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(7)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(7) ? '▼' : '▶' }}</span>
                Business Development Engineer
              </h4>
              <p class="company">SITE PREPARATION MANAGEMENT CO., LTD.</p>
            </div>
            <span class="period">Jan 2021 - Dec 2021 · 1 yr</span>
          </div>
          <div v-show="isExperienceExpanded(7)" class="experience-details">
            <p class="job-type">Full-time</p>
            <ul>
              <li>Business Development</li>
              <li>Software Development (Node.js, Vue/NuxtJs, Laravel)</li>
            </ul>
            <p><strong>Experiences:</strong></p>
            <ul>
              <li>ERP customization and support</li>
              <li>Vendor Online System</li>
              <li>New Project/Solution Development</li>
            </ul>
            <p><strong>Skills:</strong> Business Operations · Enterprise Software · IT systems development · Project Planning · Project Direction · Organization Skills · Attention to Detail · Software as a Service (SaaS) · Microsoft PowerPoint · Communication · Software Architectural Design · Technical Support · System Development · IT Service Management · English · Demonstration · Problem Solving · Software Development Life Cycle (SDLC) · Information Technology · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(8)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(8) ? '▼' : '▶' }}</span>
                Freelance Researcher
              </h4>
              <p class="company">Freelance</p>
            </div>
            <span class="period">Jul 2021 - Jul 2021 · 1 mo</span>
          </div>
          <div v-show="isExperienceExpanded(8)" class="experience-details">
            <p class="location">Bangkok Metropolitan Area</p>
            <p><strong>Skills:</strong> Project Direction · Organization Skills · Microsoft PowerPoint · Communication · English · Problem Solving · Information Technology · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(9)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(9) ? '▼' : '▶' }}</span>
                Gap year
              </h4>
              <p class="company">Career Break</p>
            </div>
            <span class="period">Jun 2020 - Dec 2020 · 7 mos</span>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(10)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(10) ? '▼' : '▶' }}</span>
                Programmer (Business & Research developer)
              </h4>
              <p class="company">SITE PREPARATION MANAGEMENT CO., LTD.</p>
            </div>
            <span class="period">Apr 2020 - May 2020 · 2 mos</span>
          </div>
          <div v-show="isExperienceExpanded(10)" class="experience-details">
            <p class="job-type">Contract</p>
            <p><strong>Skills:</strong> Enterprise Software · IT systems development · Project Planning · Project Direction · Organization Skills · Attention to Detail · Software as a Service (SaaS) · Microsoft PowerPoint · Communication · Software Architectural Design · Technical Support · System Development · IT Service Management · English · Demonstration · Problem Solving · Software Development Life Cycle (SDLC) · Information Technology · Project Implementation · Microsoft Office · Analytical Skills · Linux</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(11)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(11) ? '▼' : '▶' }}</span>
                Senior Engineering Manager
              </h4>
              <p class="company">mu Space Corp</p>
            </div>
            <span class="period">Jan 2020 - Feb 2020 · 2 mos</span>
          </div>
          <div v-show="isExperienceExpanded(11)" class="experience-details">
            <p><strong>Skills:</strong> Project Plans · Business Operations · Solution Architecture · Stakeholder Management · Presentations · Solution Selling · Project Planning · Project Direction · Organization Skills · Attention to Detail · Microsoft PowerPoint · Communication · Business Development · English · Demonstration · Problem Solving · Bid Processes · Pre-Sales Support · Project Management · Information Technology · Project Implementation · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(12)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(12) ? '▼' : '▶' }}</span>
                Engineering Manager / Business Development Executive
              </h4>
              <p class="company">mu Space Corp</p>
            </div>
            <span class="period">Apr 2019 - Dec 2019 · 9 mos</span>
          </div>
          <div v-show="isExperienceExpanded(12)" class="experience-details">
            <p><strong>Skills:</strong> Project Plans · Business Operations · Solution Architecture · Stakeholder Management · Presentations · Solution Selling · Project Planning · Project Direction · Organization Skills · IT Project Management · Attention to Detail · Microsoft PowerPoint · Communication · Business Development · English · Demonstration · Problem Solving · Bid Processes · Pre-Sales Support · Information Technology · Project Implementation · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(13)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(13) ? '▼' : '▶' }}</span>
                Satellite System Specialist / Business Development Executive
              </h4>
              <p class="company">mu Space Corp</p>
            </div>
            <span class="period">Nov 2017 - Apr 2019 · 1 yr 6 mos</span>
          </div>
          <div v-show="isExperienceExpanded(13)" class="experience-details">
            <p><strong>Skills:</strong> Business Operations · Solution Architecture · Stakeholder Management · Presentations · Solution Selling · Project Planning · Project Direction · Organization Skills · IT Project Management · Attention to Detail · Microsoft PowerPoint · Communication · Business Development · System Development · English · Demonstration · Problem Solving · Pre-Sales Support · Information Technology · Project Implementation · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(14)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(14) ? '▼' : '▶' }}</span>
                Project Management Coordinator
              </h4>
              <p class="company">Energy Exploration Co., Ltd.</p>
            </div>
            <span class="period">Sep 2019 - Feb 2020 · 6 mos</span>
          </div>
          <div v-show="isExperienceExpanded(14)" class="experience-details">
            <p class="location">Bangkok Metropolitan Area</p>
            <p><strong>Project Coordinator: Solar System for NodeB</strong></p>
            <ul>
              <li>Collaborated between the customer, vendors, suppliers, and sub-contractor</li>
              <li>Provided task updates and gathered essential information to the team</li>
              <li>Provided training and documentation to the customer</li>
              <li>Provided Technical and Engineering Supports</li>
              <li>Conducted Demonstration and Training</li>
              <li>Supported procurement and sourcing</li>
            </ul>
            <p><strong>Skills:</strong> Project Plans · Business Operations · Solution Architecture · Stakeholder Management · Presentations · Project Planning · Project Direction · Organization Skills · IT Project Management · Microsoft PowerPoint · Communication · English · Demonstration · Solar PV · Project Coordination · Problem Solving · Bid Processes · Pre-Sales Support · Project Management · Solar Energy · Information Technology · Project Implementation · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(15)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(15) ? '▼' : '▶' }}</span>
                Technical Advisor
              </h4>
              <p class="company">Araone Hyperloop</p>
            </div>
            <span class="period">May 2019 - Jan 2020 · 9 mos</span>
          </div>
          <div v-show="isExperienceExpanded(15)" class="experience-details">
            <p class="job-type">Part-time</p>
            <p><strong>Skills:</strong> Stakeholder Management · Project Direction · Organization Skills · Microsoft PowerPoint · Communication · English · Problem Solving · Information Technology · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(16)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(16) ? '▼' : '▶' }}</span>
                Senior Satellite Control Engineer
              </h4>
              <p class="company">THAICOM PUBLIC COMPANY LIMITED</p>
            </div>
            <span class="period">Aug 2011 - Oct 2017 · 6 yrs 3 mos</span>
          </div>
          <div v-show="isExperienceExpanded(16)" class="experience-details">
            <p class="location">Nonthaburi, Thailand</p>
            <p><strong>Job Description:</strong></p>
            <ul>
              <li>Monitor the satellite health and overall condition of the satellite station and control centre and execute the satellite operation per the approved plan, procedure, and direction</li>
              <li>Comply with the operational process and its quality control</li>
              <li>Support the new project related to satellite operation and satellite station per assignment</li>
              <li>Support the overall tasks and assignment from Satellite Control Department Manager</li>
              <li>Coordinate and maintain the operation of the augmented facility. In addition to maintaining the control system</li>
              <li>Support the occasional requests related to a satellite from other departments</li>
            </ul>
            <p><strong>Experience - Satellite Platform:</strong></p>
            <ul>
              <li>SPACEBUS 3000 (Thales Alenia)</li>
              <li>LS1300 (Space System Loral)</li>
              <li>STAR2 (Orbital ATK)</li>
            </ul>
            <p><strong>TT&C Software Product:</strong></p>
            <ul>
              <li>EPOCH IPS/2000 (Kratos-ISI, USA)</li>
              <li>HIFLY SOFTWARE (GMV, Spain)</li>
              <li>InControl-NG (L-3 storm, USA)</li>
              <li>Aérospatiale Control Software (Aérospatiale/Thales Alenia, France)</li>
            </ul>
            <p><strong>Skills:</strong> Satellite · IT systems development · Satellite Command & Control · Project Planning · Project Direction · Organization Skills · Attention to Detail · Microsoft PowerPoint · Satellite Ground Systems · Communication · Technical Support · English · Satellite Systems Engineering · Problem Solving · Information Technology · Satellite Communications · Microsoft Office · Analytical Skills · Linux</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(17)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(17) ? '▼' : '▶' }}</span>
                Software Developer
              </h4>
              <p class="company">Vantage Business Solutions (Thailand) Ltd.</p>
            </div>
            <span class="period">Jun 2011 - Jul 2011 · 2 mos</span>
          </div>
          <div v-show="isExperienceExpanded(17)" class="experience-details">
            <p>Development and Customization for MS Dynamics AX to support the customer</p>
            <p><strong>Skills:</strong> Enterprise Resource Planning (ERP) · Enterprise Software · IT systems development · Stakeholder Management · Project Direction · Organization Skills · Microsoft Dynamics AX · Microsoft PowerPoint · Communication · English · Problem Solving · Information Technology · Microsoft Office · Analytical Skills</p>
          </div>
        </div>

        <div class="experience-item">
          <div class="experience-header" @click="toggleExperience(18)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isExperienceExpanded(18) ? '▼' : '▶' }}</span>
                Short Summer Students Training
              </h4>
              <p class="company">University of Electro-Communications</p>
            </div>
            <span class="period">Apr 2010 - Apr 2010 · 1 mo</span>
          </div>
          <div v-show="isExperienceExpanded(18)" class="experience-details">
            <p class="location">Chofu, Tokyo, Japan</p>
            <p><strong>Skills:</strong> Microsoft PowerPoint · English · Problem Solving · Information Technology · Microsoft Office · Analytical Skills</p>
          </div>
        </div>
        
        <h3>Education</h3>
        
        <div class="education-item">
          <div class="education-header" @click="toggleEducation(0)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isEducationExpanded(0) ? '▼' : '▶' }}</span>
                Outer Common Core, Computer Programming
              </h4>
              <p class="school">42 Bangkok</p>
            </div>
            <span class="period">Aug 2024</span>
          </div>
          <div v-show="isEducationExpanded(0)" class="education-details">
            <p><strong>Skills:</strong> Stakeholder Management, IT systems development, Information Technology, Analytical Skills, Linux, English, Problem Solving</p>
          </div>
        </div>

        <div class="education-item">
          <div class="education-header" @click="toggleEducation(1)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isEducationExpanded(1) ? '▼' : '▶' }}</span>
                Common Curriculum, Computer Programming
              </h4>
              <p class="school">42 Bangkok</p>
            </div>
            <span class="period">Feb 2022 - Aug 2024</span>
          </div>
          <div v-show="isEducationExpanded(1)" class="education-details">
            <p><strong>Skills:</strong> Docker, Stakeholder Management, IT systems development, Information Technology, Bash, Analytical Skills, Linux, English, JavaScript, Problem Solving, Shell Scripting, C++, mlx, Hyperganic Core, Python, Microsoft PowerPoint, C</p>
          </div>
        </div>

        <div class="education-item">
          <div class="education-header" @click="toggleEducation(2)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isEducationExpanded(2) ? '▼' : '▶' }}</span>
                Master of Engineering (M.Eng.), Information Engineering
              </h4>
              <p class="school">King Mongkut's Institute of Technology Ladkrabang</p>
            </div>
            <span class="period">2013 - 2017</span>
          </div>
          <div v-show="isEducationExpanded(2)" class="education-details">
            <p><strong>Skills:</strong> Stakeholder Management, IT systems development, Information Technology, Analytical Skills, Linux, English, Problem Solving, Microsoft Office, Microsoft PowerPoint</p>
          </div>
        </div>

        <div class="education-item">
          <div class="education-header" @click="toggleEducation(3)" style="cursor: pointer;">
            <div>
              <h4>
                <span class="toggle-icon">{{ isEducationExpanded(3) ? '▼' : '▶' }}</span>
                Bachelor of Engineering (B.Eng.), Information Engineering
              </h4>
              <p class="school">King Mongkut's Institute of Technology Ladkrabang</p>
            </div>
            <span class="period">2007 - 2010</span>
          </div>
          <div v-show="isEducationExpanded(3)" class="education-details">
            <p><strong>Activities and societies:</strong> Robot Club (Staff)</p>
            <p><strong>Skills:</strong> Java, Microsoft PowerPoint</p>
          </div>
        </div>
        
        <h3>Technical Skills</h3>
        <div class="skills-list">
          <div class="skill-category">
            <strong>Project Management:</strong> Project Plans · Project Planning · Project Direction · IT Project Management · Project Documentation · Project Management · Project Implementation · Workflow Management · Workload Prioritization · Project Coordination · Bid Processes
          </div>
          <div class="skill-category">
            <strong>Technical & Architecture:</strong> Solution Architecture · IT systems development · Software Architectural Design · System Development · Software Development Life Cycle (SDLC) · Enterprise Software · Data Governance · IT Service Management · Attack Surface Management
          </div>
          <div class="skill-category">
            <strong>Business & Development:</strong> Business Operations · Business Development · Solution Selling · Account Management · Product Management · Pre-Sales Support · Client Relations · IT Enabled Business Transformation
          </div>
          <div class="skill-category">
            <strong>Software & Tools:</strong> Software as a Service (SaaS) · Microsoft PowerPoint · Microsoft Office · Jira · Node.js · Vue/NuxtJs · Laravel · Docker · Jitsi · Linux · Microsoft Dynamics AX · Enterprise Resource Planning (ERP)
          </div>
          <div class="skill-category">
            <strong>Satellite Systems:</strong> Satellite · Satellite Command & Control · Satellite Ground Systems · Satellite Systems Engineering · Satellite Communications
          </div>
          <div class="skill-category">
            <strong>Languages & Programming:</strong> JavaScript · Python · C · C++ · Java · Bash · Shell Scripting · mlx · Hyperganic Core
          </div>
          <div class="skill-category">
            <strong>Specialized:</strong> Solar PV · Solar Energy · PDPA (Data Protection)
          </div>
          <div class="skill-category">
            <strong>Soft Skills:</strong> Stakeholder Management · Presentations · Communication · Organization Skills · Attention to Detail · English · Demonstration · Problem Solving · Analytical Skills · Technical Support
          </div>
        </div>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2025 Nuttapon N. Built with Nuxt.js</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Resume - Nuttapon N',
  meta: [
    { name: 'description', content: 'Professional resume and work experience of Nuttapon N - Full-Stack Developer' }
  ]
})

// Track expanded state for each experience and education item
const expandedExperiences = ref(new Set())
const expandedEducation = ref(new Set())

const toggleExperience = (index) => {
  if (expandedExperiences.value.has(index)) {
    expandedExperiences.value.delete(index)
  } else {
    expandedExperiences.value.add(index)
  }
}

const toggleEducation = (index) => {
  if (expandedEducation.value.has(index)) {
    expandedEducation.value.delete(index)
  } else {
    expandedEducation.value.add(index)
  }
}

const isExperienceExpanded = (index) => expandedExperiences.value.has(index)
const isEducationExpanded = (index) => expandedEducation.value.has(index)
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

.skill-category {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  line-height: 1.8;
  color: #555;
}

.skill-category strong {
  color: #2c3e50;
  display: inline-block;
  min-width: 120px;
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
