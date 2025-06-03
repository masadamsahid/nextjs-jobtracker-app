export type Chat = {
  role: 'interviewer' | 'interviewee';
  message: string;
  created_at: string; // datetime string
}

export type Interview = {
  id: number;
  job_application_id: number;
  created_at: string; // datetime string
  chats: Chat[];
}

const INTERVIEWS: Interview[] = [
  // Job Application ID 1: 1 Interview
  {
    id: 101,
    job_application_id: 1,
    created_at: "2025-02-03T10:00:00Z",
    chats: [
      { role: 'interviewer', message: "Hi [Candidate Name], thanks for joining. Can you tell me a bit about yourself?", created_at: "2025-02-03T10:01:00Z" },
      { role: 'interviewee', message: "Certainly. I'm a software engineer with X years of experience...", created_at: "2025-02-03T10:02:30Z" },
      { role: 'interviewer', message: "Great. Can you walk me through your experience with [Technology]?", created_at: "2025-02-03T10:05:00Z" },
      { role: 'interviewee', message: "Yes, I used [Technology] on a project where we built...", created_at: "2025-02-03T10:07:00Z" },
      { role: 'interviewer', message: "Interesting. How do you handle conflicts within a team?", created_at: "2025-02-03T10:10:00Z" },
      { role: 'interviewee', message: "I believe in open communication and finding common ground...", created_at: "2025-02-03T10:11:30Z" },
      { role: 'interviewer', message: "Tell me about a challenging project you worked on.", created_at: "2025-02-03T10:14:00Z" },
      { role: 'interviewee', message: "On a recent project, we faced issues with scalability...", created_at: "2025-02-03T10:16:00Z" },
      { role: 'interviewer', message: "How did you resolve that?", created_at: "2025-02-03T10:18:00Z" },
      { role: 'interviewee', message: "We implemented [Solution] which improved performance significantly.", created_at: "2025-02-03T10:19:30Z" },
      { role: 'interviewer', message: "Good to know. Do you have any questions for me?", created_at: "2025-02-03T10:22:00Z" },
      { role: 'interviewee', message: "Yes, can you describe the team culture?", created_at: "2025-02-03T10:23:30Z" },
      { role: 'interviewer', message: "We have a collaborative and innovative culture...", created_at: "2025-02-03T10:25:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-02-03T10:28:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-02-03T10:29:00Z" },
    ]
  },
  // Job Application ID 5: 2 Interviews
  {
    id: 102,
    job_application_id: 5,
    created_at: "2025-02-05T11:00:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thank you for applying. Can you discuss your experience with digital marketing?", created_at: "2025-02-05T11:01:00Z" },
      { role: 'interviewee', message: "Certainly. I have experience in SEO, social media, and email marketing...", created_at: "2025-02-05T11:02:30Z" },
      { role: 'interviewer', message: "That's a good range. Can you share a successful marketing campaign you led?", created_at: "2025-02-05T11:04:30Z" },
      { role: 'interviewee', message: "I led a campaign for [Product] that resulted in a X% increase in leads.", created_at: "2025-02-05T11:06:00Z" },
      { role: 'interviewer', message: "Impressive. How do you measure the success of a marketing campaign?", created_at: "2025-02-05T11:08:00Z" },
      { role: 'interviewee', message: "I use metrics like conversion rates, ROI, and customer acquisition cost.", created_at: "2025-02-05T11:09:30Z" },
      { role: 'interviewer', message: "What marketing tools are you proficient in?", created_at: "2025-02-05T11:11:00Z" },
      { role: 'interviewee', message: "I'm skilled in HubSpot, Google Analytics, and various social media platforms.", created_at: "2025-02-05T11:12:30Z" },
      { role: 'interviewer', message: "Good. We'll be moving on to the next stage. Do you have any questions?", created_at: "2025-02-05T11:15:00Z" },
      { role: 'interviewee', message: "What are the next steps in the interview process?", created_at: "2025-02-05T11:16:30Z" },
      { role: 'interviewer', message: "You'll have a follow-up interview with the team lead.", created_at: "2025-02-05T11:18:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch about the next steps.", created_at: "2025-02-05T11:20:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I look forward to hearing from you.", created_at: "2025-02-05T11:21:00Z" },
    ]
  },
  {
    id: 103,
    job_application_id: 5,
    created_at: "2025-02-12T14:00:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back, [Candidate Name]. We're excited to learn more about your strategic thinking.", created_at: "2025-02-12T14:01:00Z" },
      { role: 'interviewee', message: "Thank you, it's great to be here.", created_at: "2025-02-12T14:02:00Z" },
      { role: 'interviewer', message: "Can you describe how you develop a content marketing strategy?", created_at: "2025-02-12T14:04:00Z" },
      { role: 'interviewee', message: "I start by understanding the target audience and their needs...", created_at: "2025-02-12T14:06:00Z" },
      { role: 'interviewer', message: "How do you adapt your strategy based on performance data?", created_at: "2025-02-12T14:08:00Z" },
      { role: 'interviewee', message: "I regularly analyze metrics to identify what's working and adjust accordingly.", created_at: "2025-02-12T14:09:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to overcome a challenge in a marketing project.", created_at: "2025-02-12T14:12:00Z" },
      { role: 'interviewee', message: "We faced difficulties with low engagement on a social media campaign...", created_at: "2025-02-12T14:14:00Z" },
      { role: 'interviewer', message: "What did you do to address that?", created_at: "2025-02-12T14:16:00Z" },
      { role: 'interviewee', message: "We A/B tested different content formats and posting times, which improved engagement.", created_at: "2025-02-12T14:17:30Z" },
      { role: 'interviewer', message: "Excellent. Do you have any further questions for us?", created_at: "2025-02-12T14:20:00Z" },
      { role: 'interviewee', message: "What are the key priorities for the marketing team in the next quarter?", created_at: "2025-02-12T14:21:30Z" },
      { role: 'interviewer', message: "Our focus is on [Priority] and [Another Priority]...", created_at: "2025-02-12T14:23:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-02-12T14:26:00Z" },
      { role: 'interviewee', message: "Thank you both, I enjoyed our conversation.", created_at: "2025-02-12T14:27:00Z" },
    ]
  },
  // Job Application ID 13: 3 Interviews
  {
    id: 104,
    job_application_id: 13,
    created_at: "2025-02-15T09:00:00Z",
    chats: [
      { role: 'interviewer', message: "Hi [Candidate Name], thanks for coming in. Tell me about your experience as a Technical Product Manager.", created_at: "2025-02-15T09:01:00Z" },
      { role: 'interviewee', message: "I've been working as a TPM for X years, focusing on [Area of Focus]...", created_at: "2025-02-15T09:02:30Z" },
      { role: 'interviewer', message: "Can you describe a complex technical product you've managed?", created_at: "2025-02-15T09:05:00Z" },
      { role: 'interviewee', message: "I was responsible for [Product Name], which involved integrating [Technology]...", created_at: "2025-02-15T09:07:00Z" },
      { role: 'interviewer', message: "How do you bridge the gap between technical teams and business stakeholders?", created_at: "2025-02-15T09:10:00Z" },
      { role: 'interviewee', message: "I use clear communication and translate technical details into business value.", created_at: "2025-02-15T09:11:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to make a difficult product decision.", created_at: "2025-02-15T09:14:00Z" },
      { role: 'interviewee', message: "We had to decide whether to prioritize [Feature A] or [Feature B]...", created_at: "2025-02-15T09:16:00Z" },
      { role: 'interviewer', message: "What was the outcome?", created_at: "2025-02-15T09:18:00Z" },
      { role: 'interviewee', message: "We ultimately chose [Feature A] based on market research and user feedback.", created_at: "2025-02-15T09:19:30Z" },
      { role: 'interviewer', message: "Any questions for me?", created_at: "2025-02-15T09:22:00Z" },
      { role: 'interviewee', message: "What are the biggest technical challenges the team is facing?", created_at: "2025-02-15T09:23:30Z" },
      { role: 'interviewer', message: "We are currently focused on improving scalability and performance...", created_at: "2025-02-15T09:25:00Z" },
      { role: 'interviewer', message: "Thanks, we'll be in touch about the next round.", created_at: "2025-02-15T09:28:00Z" },
      { role: 'interviewee', message: "Thank you, I look forward to it.", created_at: "2025-02-15T09:29:00Z" },
    ]
  },
  {
    id: 105,
    job_application_id: 13,
    created_at: "2025-02-22T10:00:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back, [Candidate Name]. This round will focus on your technical depth.", created_at: "2025-02-22T10:01:00Z" },
      { role: 'interviewee', message: "Great, I'm ready.", created_at: "2025-02-22T10:02:00Z" },
      { role: 'interviewer', message: "Can you explain the architecture of a recent system you worked on?", created_at: "2025-02-22T10:04:00Z" },
      { role: 'interviewee', message: "We used a microservices architecture with [Technologies]...", created_at: "2025-02-22T10:07:00Z" },
      { role: 'interviewer', message: "How do you handle technical debt?", created_at: "2025-02-22T10:10:00Z" },
      { role: 'interviewee', message: "I believe in addressing technical debt proactively through refactoring and dedicated sprints.", created_at: "2025-02-22T10:11:30Z" },
      { role: 'interviewer', message: "Describe a situation where you had to debug a complex production issue.", created_at: "2025-02-22T10:14:00Z" },
      { role: 'interviewee', message: "We had a performance degradation issue caused by [Root Cause]...", created_at: "2025-02-22T10:16:00Z" },
      { role: 'interviewer', message: "How did you identify and fix it?", created_at: "2025-02-22T10:18:00Z" },
      { role: 'interviewee', message: "We used monitoring tools and logs to pinpoint the issue and implemented [Fix]...", created_at: "2025-02-22T10:19:30Z" },
      { role: 'interviewer', message: "Excellent. Any questions for me about the technical environment?", created_at: "2025-02-22T10:22:00Z" },
      { role: 'interviewee', message: "What is the typical release cycle?", created_at: "2025-02-22T10:23:30Z" },
      { role: 'interviewer', message: "We operate on a [Release Cycle] cadence...", created_at: "2025-02-22T10:25:00Z" },
      { role: 'interviewer', message: "Thank you, we'll be in touch.", created_at: "2025-02-22T10:28:00Z" },
      { role: 'interviewee', message: "Thank you for your time.", created_at: "2025-02-22T10:29:00Z" },
    ]
  },
  {
    id: 106,
    job_application_id: 13,
    created_at: "2025-03-01T11:00:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], this is our final interview. We'd like to discuss your leadership and vision.", created_at: "2025-03-01T11:01:00Z" },
      { role: 'interviewee', message: "Thank you for the opportunity.", created_at: "2025-03-01T11:02:00Z" },
      { role: 'interviewer', message: "How do you define product success?", created_at: "2025-03-01T11:04:00Z" },
      { role: 'interviewee', message: "Product success is measured by [Metrics] and user satisfaction...", created_at: "2025-03-01T11:06:00Z" },
      { role: 'interviewer', message: "What is your process for gathering and prioritizing user feedback?", created_at: "2025-03-01T11:08:00Z" },
      { role: 'interviewee', message: "I use surveys, user interviews, and analytics to collect feedback and prioritize based on impact.", created_at: "2025-03-01T11:09:30Z" },
      { role: 'interviewer', message: "How do you see this product evolving in the next 1-2 years?", created_at: "2025-03-01T11:12:00Z" },
      { role: 'interviewee', message: "I see opportunities for [Future Features] and expanding into [New Markets]...", created_at: "2025-03-01T11:14:00Z" },
      { role: 'interviewer', message: "What are your thoughts on building and mentoring a team?", created_at: "2025-03-01T11:16:00Z" },
      { role: 'interviewee', message: "I believe in fostering a collaborative environment and empowering team members.", created_at: "2025-03-01T11:17:30Z" },
      { role: 'interviewer', message: "Do you have any final questions for us?", created_at: "2025-03-01T11:20:00Z" },
      { role: 'interviewee', message: "What are the most exciting challenges the team is currently tackling?", created_at: "2025-03-01T11:21:30Z" },
      { role: 'interviewer', message: "We're working on [Challenge] and it's a great opportunity for innovation.", created_at: "2025-03-01T11:23:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch with a decision soon.", created_at: "2025-03-01T11:26:00Z" },
      { role: 'interviewee', message: "Thank you for the thorough process. I'm very interested in this opportunity.", created_at: "2025-03-01T11:27:00Z" },
    ]
  },
  // Job Application ID 18: 1 Interview
  {
    id: 107,
    job_application_id: 18,
    created_at: "2025-02-20T10:00:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience as a Business Analyst?", created_at: "2025-02-20T10:01:00Z" },
      { role: 'interviewee', message: "I've worked on various projects, focusing on gathering requirements and process improvement...", created_at: "2025-02-20T10:02:30Z" },
      { role: 'interviewer', message: "Describe a project where you successfully identified and implemented a process improvement.", created_at: "2025-02-20T10:05:00Z" },
      { role: 'interviewee', message: "On a recent project, we streamlined the [Process Name] which reduced completion time by X%.", created_at: "2025-02-20T10:07:00Z" },
      { role: 'interviewer', message: "That's a significant improvement. How do you gather and document requirements?", created_at: "2025-02-20T10:10:00Z" },
      { role: 'interviewee', message: "I use techniques like interviews, workshops, and documentation analysis...", created_at: "2025-02-20T10:11:30Z" },
      { role: 'interviewer', message: "Tell me about a challenging stakeholder you've worked with.", created_at: "2025-02-20T10:14:00Z" },
      { role: 'interviewee', message: "I had a stakeholder who was initially resistant to change...", created_at: "2025-02-20T10:16:00Z" },
      { role: 'interviewer', message: "How did you manage that relationship?", created_at: "2025-02-20T10:18:00Z" },
      { role: 'interviewee', message: "I actively listened to their concerns and demonstrated the benefits of the proposed changes.", created_at: "2025-02-20T10:19:30Z" },
      { role: 'interviewer', message: "Good approach. Do you have any questions for me?", created_at: "2025-02-20T10:22:00Z" },
      { role: 'interviewee', message: "What are the key business initiatives the team is focused on?", created_at: "2025-02-20T10:23:30Z" },
      { role: 'interviewer', message: "We are focused on [Initiative A] and [Initiative B]...", created_at: "2025-02-20T10:25:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-02-20T10:28:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-02-20T10:29:00Z" },
    ]
  },
  // Job Application ID 22: 2 Interviews
  {
    id: 108,
    job_application_id: 22,
    created_at: "2025-02-24T10:00:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thank you for applying. Can you discuss your experience with AI research?", created_at: "2025-02-24T10:01:00Z" },
      { role: 'interviewee', message: "I've conducted research in various areas of AI, including [Area] and [Another Area]...", created_at: "2025-02-24T10:02:30Z" },
      { role: 'interviewer', message: "Can you share a research project you're particularly proud of?", created_at: "2025-02-24T10:04:30Z" },
      { role: 'interviewee', message: "I worked on a project that developed a novel approach for [Problem]...", created_at: "2025-02-24T10:06:00Z" },
      { role: 'interviewer', message: "Fascinating. What are your favorite programming languages for AI research?", created_at: "2025-02-24T10:08:00Z" },
      { role: 'interviewee', message: "I primarily use Python with libraries like TensorFlow and PyTorch.", created_at: "2025-02-24T10:09:30Z" },
      { role: 'interviewer', message: "How do you stay updated on the latest advancements in AI?", created_at: "2025-02-24T10:11:00Z" },
      { role: 'interviewee', message: "I follow research papers, attend conferences, and participate in online communities.", created_at: "2025-02-24T10:12:30Z" },
      { role: 'interviewer', message: "Good. We'll be moving on to the next stage. Do you have any questions?", created_at: "2025-02-24T10:15:00Z" },
      { role: 'interviewee', message: "Can you describe the research focus of the team?", created_at: "2025-02-24T10:16:30Z" },
      { role: 'interviewer', message: "Our current research is focused on [Research Area]...", created_at: "2025-02-24T10:18:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch about the next steps.", created_at: "2025-02-24T10:20:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-02-24T10:21:00Z" },
    ]
  },
  {
    id: 109,
    job_application_id: 22,
    created_at: "2025-03-03T14:00:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back, [Candidate Name]. This round will delve deeper into your technical skills.", created_at: "2025-03-03T14:01:00Z" },
      { role: 'interviewee', message: "Certainly.", created_at: "2025-03-03T14:02:00Z" },
      { role: 'interviewer', message: "Can you explain the principles of [AI Algorithm]?", created_at: "2025-03-03T14:04:00Z" },
      { role: 'interviewee', message: "[Explanation of Algorithm]...", created_at: "2025-03-03T14:06:00Z" },
      { role: 'interviewer', message: "How do you approach model evaluation and selection?", created_at: "2025-03-03T14:08:00Z" },
      { role: 'interviewee', message: "I use various metrics like accuracy, precision, and recall, and cross-validation...", created_at: "2025-03-03T14:09:30Z" },
      { role: 'interviewer', message: "Describe a challenging problem you solved using AI.", created_at: "2025-03-03T14:12:00Z" },
      { role: 'interviewee', message: "We faced difficulties with data imbalance in a classification problem...", created_at: "2025-03-03T14:14:00Z" },
      { role: 'interviewer', message: "How did you address that?", created_at: "2025-03-03T14:16:00Z" },
      { role: 'interviewee', message: "We used techniques like oversampling and data augmentation...", created_at: "2025-03-03T14:17:30Z" },
      { role: 'interviewer', message: "Excellent. Do you have any further questions for us?", created_at: "2025-03-03T14:20:00Z" },
      { role: 'interviewee', message: "What is the collaborative environment like within the research team?", created_at: "2025-03-03T14:21:30Z" },
      { role: 'interviewer', message: "We encourage knowledge sharing and collaborative problem-solving...", created_at: "2025-03-03T14:23:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-03T14:26:00Z" },
      { role: 'interviewee', message: "Thank you, I enjoyed the technical discussion.", created_at: "2025-03-03T14:27:00Z" },
    ]
  },
  // Job Application ID 27: 1 Interview
  {
    id: 110,
    job_application_id: 27,
    created_at: "2025-03-01T13:30:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience with Python?", created_at: "2025-03-01T13:31:00Z" },
      { role: 'interviewee', message: "I have extensive experience with Python for backend development and scripting...", created_at: "2025-03-01T13:32:30Z" },
      { role: 'interviewer', message: "Can you describe a significant project you built using Python?", created_at: "2025-03-01T13:35:00Z" },
      { role: 'interviewee', message: "I developed a web application using Django and integrated with [External Service]...", created_at: "2025-03-01T13:37:00Z" },
      { role: 'interviewer', message: "How do you ensure code quality in your Python projects?", created_at: "2025-03-01T13:40:00Z" },
      { role: 'interviewee', message: "I use linters, unit tests, and code reviews.", created_at: "2025-03-01T13:41:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to optimize the performance of a Python application.", created_at: "2025-03-01T13:44:00Z" },
      { role: 'interviewee', message: "We identified a bottleneck in a database query...", created_at: "2025-03-01T13:46:00Z" },
      { role: 'interviewer', message: "How did you resolve that?", created_at: "2025-03-01T13:48:00Z" },
      { role: 'interviewee', message: "We refactored the query and added appropriate indexes.", created_at: "2025-03-01T13:49:30Z" },
      { role: 'interviewer', message: "Good. Do you have any questions for me?", created_at: "2025-03-01T13:52:00Z" },
      { role: 'interviewee', message: "What is the team's preferred development methodology?", created_at: "2025-03-01T13:53:30Z" },
      { role: 'interviewer', message: "We follow Agile principles with a Scrum framework...", created_at: "2025-03-01T13:55:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-01T13:58:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-03-01T13:59:00Z" },
    ]
  },
  // Job Application ID 32: 2 Interviews
  {
    id: 111,
    job_application_id: 32,
    created_at: "2025-03-06T10:30:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thank you for applying. Can you discuss your experience with Deep Learning?", created_at: "2025-03-06T10:31:00Z" },
      { role: 'interviewee', message: "I've worked on deep learning projects related to [Domain] and [Another Domain]...", created_at: "2025-03-06T10:32:30Z" },
      { role: 'interviewer', message: "Can you explain the concept of backpropagation?", created_at: "2025-03-06T10:34:30Z" },
      { role: 'interviewee', message: "[Explanation of Backpropagation]...", created_at: "2025-03-06T10:36:00Z" },
      { role: 'interviewer', message: "What deep learning frameworks are you familiar with?", created_at: "2025-03-06T10:38:00Z" },
      { role: 'interviewee', message: "I am proficient in TensorFlow and Keras.", created_at: "2025-03-06T10:39:30Z" },
      { role: 'interviewer', message: "Describe a project where you encountered challenges with model convergence.", created_at: "2025-03-06T10:41:00Z" },
      { role: 'interviewee', message: "We had issues with training a model on a large dataset...", created_at: "2025-03-06T10:42:30Z" },
      { role: 'interviewer', message: "How did you address that?", created_at: "2025-03-06T10:44:00Z" },
      { role: 'interviewee', message: "We used techniques like gradient clipping and learning rate scheduling.", created_at: "2025-03-06T10:45:30Z" },
      { role: 'interviewer', message: "Good. We'll be moving on to the next stage. Do you have any questions?", created_at: "2025-03-06T10:48:00Z" },
      { role: 'interviewee', message: "What are the key deep learning research areas within the team?", created_at: "2025-03-06T10:49:30Z" },
      { role: 'interviewer', message: "We're actively researching [Research Area] and its applications...", created_at: "2025-03-06T10:51:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch about the next steps.", created_at: "2025-03-06T10:54:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I look forward to it.", created_at: "2025-03-06T10:55:00Z" },
    ]
  },
  {
    id: 112,
    job_application_id: 32,
    created_at: "2025-03-13T14:00:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back, [Candidate Name]. Let's dive deeper into your project experience.", created_at: "2025-03-13T14:01:00Z" },
      { role: 'interviewee', message: "Certainly.", created_at: "2025-03-13T14:02:00Z" },
      { role: 'interviewer', message: "Can you describe the data preprocessing steps you used for your [Project Name] project?", created_at: "2025-03-13T14:04:00Z" },
      { role: 'interviewee', message: "We performed [Preprocessing Steps] and handled missing data using [Method]...", created_at: "2025-03-13T14:07:00Z" },
      { role: 'interviewer', message: "How do you select the appropriate deep learning model for a specific task?", created_at: "2025-03-13T14:10:00Z" },
      { role: 'interviewee', message: "I consider the data type, the problem type, and the available computational resources.", created_at: "2025-03-13T14:11:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to explain complex deep learning concepts to a non-technical audience.", created_at: "2025-03-13T14:14:00Z" },
      { role: 'interviewee', message: "I had to explain the workings of a neural network to the business team...", created_at: "2025-03-13T14:16:00Z" },
      { role: 'interviewer', message: "How did you simplify it?", created_at: "2025-03-13T14:18:00Z" },
      { role: 'interviewee', message: "I used analogies and focused on the input and output, and the overall goal.", created_at: "2025-03-13T14:19:30Z" },
      { role: 'interviewer', message: "Very good. Do you have any further questions?", created_at: "2025-03-13T14:22:00Z" },
      { role: 'interviewee', message: "What are the opportunities for growth within the team?", created_at: "2025-03-13T14:23:30Z" },
      { role: 'interviewer', message: "We encourage continuous learning and offer opportunities for specialization...", created_at: "2025-03-13T14:25:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-13T14:28:00Z" },
      { role: 'interviewee', message: "Thank you, I appreciate your time.", created_at: "2025-03-13T14:29:00Z" },
    ]
  },
  // Job Application ID 37: 1 Interview
  {
    id: 113,
    job_application_id: 37,
    created_at: "2025-03-09T12:30:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience with Java?", created_at: "2025-03-09T12:31:00Z" },
      { role: 'interviewee', message: "I have been developing with Java for X years, primarily for enterprise applications...", created_at: "2025-03-09T12:32:30Z" },
      { role: 'interviewer', message: "Can you describe a complex Java application you've worked on?", created_at: "2025-03-09T12:35:00Z" },
      { role: 'interviewee', message: "I was involved in building a [Application Type] using Spring Boot and microservices.", created_at: "2025-03-09T12:37:00Z" },
      { role: 'interviewer', message: "How do you handle concurrency and threading in Java?", created_at: "2025-03-09T12:40:00Z" },
      { role: 'interviewee', message: "I use concurrent collections and synchronization mechanisms to ensure thread safety.", created_at: "2025-03-09T12:41:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to troubleshoot a performance issue in a Java application.", created_at: "2025-03-09T12:44:00Z" },
      { role: 'interviewee', message: "We had a memory leak in a production service...", created_at: "2025-03-09T12:46:00Z" },
      { role: 'interviewer', message: "How did you diagnose and fix it?", created_at: "2025-03-09T12:48:00Z" },
      { role: 'interviewee', message: "We used profiling tools and analyzed heap dumps to identify the source of the leak.", created_at: "2025-03-09T12:49:30Z" },
      { role: 'interviewer', message: "Excellent. Do you have any questions for me?", created_at: "2025-03-09T12:52:00Z" },
      { role: 'interviewee', message: "What are the current challenges the team is facing in terms of scalability?", created_at: "2025-03-09T12:53:30Z" },
      { role: 'interviewer', message: "We're working on scaling our services to handle increased traffic...", created_at: "2025-03-09T12:55:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-09T12:58:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-03-09T12:59:00Z" },
    ]
  },
  // Job Application ID 42: 1 Interview
  {
    id: 114,
    job_application_id: 42,
    created_at: "2025-03-14T11:30:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience with NLP?", created_at: "2025-03-14T11:31:00Z" },
      { role: 'interviewee', message: "I've worked on NLP tasks like sentiment analysis and text classification...", created_at: "2025-03-14T11:32:30Z" },
      { role: 'interviewer', message: "Can you describe a challenging NLP project you've worked on?", created_at: "2025-03-14T11:35:00Z" },
      { role: 'interviewee', message: "I developed a model for [Specific Task] which involved handling noisy text data.", created_at: "2025-03-14T11:37:00Z" },
      { role: 'interviewer', message: "How do you handle data preprocessing for NLP tasks?", created_at: "2025-03-14T11:40:00Z" },
      { role: 'interviewee', message: "I perform steps like tokenization, stemming/lemmatization, and removing stop words.", created_at: "2025-03-14T11:41:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to evaluate different NLP models.", created_at: "2025-03-14T11:44:00Z" },
      { role: 'interviewee', message: "I compared the performance of different models like [Model A] and [Model B]...", created_at: "2025-03-14T11:46:00Z" },
      { role: 'interviewer', message: "What metrics did you use?", created_at: "2025-03-14T11:48:00Z" },
      { role: 'interviewee', message: "I used metrics like accuracy, F1-score, and precision/recall.", created_at: "2025-03-14T11:49:30Z" },
      { role: 'interviewer', message: "Good. Do you have any questions for me?", created_at: "2025-03-14T11:52:00Z" },
      { role: 'interviewee', message: "What are the most exciting NLP challenges the team is currently working on?", created_at: "2025-03-14T11:53:30Z" },
      { role: 'interviewer', message: "We're exploring applications of NLP in [Application Area]...", created_at: "2025-03-14T11:55:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-14T11:58:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-03-14T11:59:00Z" },
    ]
  },
  // Job Application ID 47: 1 Interview
  {
    id: 115,
    job_application_id: 47,
    created_at: "2025-03-19T13:30:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience with C++?", created_at: "2025-03-19T13:31:00Z" },
      { role: 'interviewee', message: "I have experience with C++ for systems programming and performance-critical applications...", created_at: "2025-03-19T13:32:30Z" },
      { role: 'interviewer', message: "Can you describe a complex C++ system you've designed or worked on?", created_at: "2025-03-19T13:35:00Z" },
      { role: 'interviewee', message: "I was involved in developing a [System Type] that required low latency and high throughput.", created_at: "2025-03-19T13:37:00Z" },
      { role: 'interviewer', message: "How do you manage memory in C++?", created_at: "2025-03-19T13:40:00Z" },
      { role: 'interviewee', message: "I use smart pointers and follow best practices to avoid memory leaks.", created_at: "2025-03-19T13:41:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to optimize the performance of a C++ application.", created_at: "2025-03-19T13:44:00Z" },
      { role: 'interviewee', message: "We identified a performance bottleneck in a critical section of code...", created_at: "2025-03-19T13:46:00Z" },
      { role: 'interviewer', message: "How did you resolve that?", created_at: "2025-03-19T13:48:00Z" },
      { role: 'interviewee', message: "We used profiling tools and optimized the algorithm, which significantly improved performance.", created_at: "2025-03-19T13:49:30Z" },
      { role: 'interviewer', message: "Excellent. Do you have any questions for me?", created_at: "2025-03-19T13:52:00Z" },
      { role: 'interviewee', message: "What are the key technical challenges the team is currently addressing?", created_at: "2025-03-19T13:53:30Z" },
      { role: 'interviewer', message: "We're working on optimizing our core engine for specific hardware...", created_at: "2025-03-19T13:55:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-19T13:58:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-03-19T13:59:00Z" },
    ]
  },
  // Job Applications with no interviews (approximately 35% of 50 = 17-18)
  // Job Applications with 1 interview (approximately 45% of 50 = 22-23) - already added some above
  // Job Applications with 2 interviews (approximately 15% of 50 = 7-8) - already added some above
  // Job Applications with 3 interviews (approximately 5% of 50 = 2-3) - already added some above

  // Adding more interviews to meet the ratio requirements.
  // Single Interviews (targeting around 22-23 total with existing ones)
  {
    id: 116,
    job_application_id: 1, // Already has one, adding another for demonstration
    created_at: "2025-02-10T10:00:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back [Candidate Name]. This round will focus on problem-solving.", created_at: "2025-02-10T10:01:00Z" },
      { role: 'interviewee', message: "Okay, I'm ready.", created_at: "2025-02-10T10:02:00Z" },
      { role: 'interviewer', message: "Here's a coding challenge: [Problem Description]", created_at: "2025-02-10T10:04:00Z" },
      { role: 'interviewee', message: "Okay, I understand the problem. I'll approach it by [Approach]...", created_at: "2025-02-10T10:06:00Z" },
      { role: 'interviewer', message: "Walk me through your thought process.", created_at: "2025-02-10T10:08:00Z" },
      { role: 'interviewee', message: "First, I'll handle the edge cases...", created_at: "2025-02-10T10:09:30Z" },
      { role: 'interviewer', message: "What is the time complexity of your solution?", created_at: "2025-02-10T10:12:00Z" },
      { role: 'interviewee', message: "The time complexity is O(N) because...", created_at: "2025-02-10T10:13:30Z" },
      { role: 'interviewer', message: "Can you optimize it further?", created_at: "2025-02-10T10:15:00Z" },
      { role: 'interviewee', message: "We could potentially improve it by using [Optimization Technique]...", created_at: "2025-02-10T10:17:00Z" },
      { role: 'interviewer', message: "Good. Do you have any questions about the technical work here?", created_at: "2025-02-10T10:20:00Z" },
      { role: 'interviewee', message: "What is the team's approach to testing?", created_at: "2025-02-10T10:21:30Z" },
      { role: 'interviewer', message: "We have a strong focus on automated testing...", created_at: "2025-02-10T10:23:00Z" },
      { role: 'interviewer', message: "Thanks for your time. We'll be in touch.", created_at: "2025-02-10T10:26:00Z" },
      { role: 'interviewee', message: "Thank you, I enjoyed the challenge.", created_at: "2025-02-10T10:27:00Z" },
    ]
  },
  {
    id: 117,
    job_application_id: 12, // Already has one, adding another for demonstration
    created_at: "2025-02-14T10:30:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back [Candidate Name]. This round will be a technical deep dive.", created_at: "2025-02-14T10:31:00Z" },
      { role: 'interviewee', message: "Alright.", created_at: "2025-02-14T10:32:00Z" },
      { role: 'interviewer', message: "Explain the difference between supervised and unsupervised learning.", created_at: "2025-02-14T10:34:00Z" },
      { role: 'interviewee', message: "Supervised learning uses labeled data, while unsupervised learning works with unlabeled data...", created_at: "2025-02-14T10:36:00Z" },
      { role: 'interviewer', message: "Describe a time you had to deal with imbalanced datasets.", created_at: "2025-02-14T10:38:00Z" },
      { role: 'interviewee', message: "I used techniques like oversampling the minority class and undersampling the majority class.", created_at: "2025-02-14T10:39:30Z" },
      { role: 'interviewer', message: "What metrics do you use to evaluate classification models?", created_at: "2025-02-14T10:42:00Z" },
      { role: 'interviewee', message: "I use accuracy, precision, recall, F1-score, and AUC-ROC.", created_at: "2025-02-14T10:43:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to explain a complex model to a non-technical audience.", created_at: "2025-02-14T10:45:00Z" },
      { role: 'interviewee', message: "I simplified the concepts and focused on the business outcomes of the model.", created_at: "2025-02-14T10:46:30Z" },
      { role: 'interviewer', message: "Good to know. Do you have any questions about the technical challenges here?", created_at: "2025-02-14T10:49:00Z" },
      { role: 'interviewee', message: "What is the infrastructure used for model training and deployment?", created_at: "2025-02-14T10:50:30Z" },
      { role: 'interviewer', message: "We utilize cloud-based infrastructure with GPUs...", created_at: "2025-02-14T10:52:00Z" },
      { role: 'interviewer', message: "Thank you for your time. We'll be in touch.", created_at: "2025-02-14T10:55:00Z" },
      { role: 'interviewee', message: "Thank you, I enjoyed the discussion.", created_at: "2025-02-14T10:56:00Z" },
    ]
  },
  {
    id: 118,
    job_application_id: 17, // Single Interview
    created_at: "2025-02-19T12:30:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience with Node.js?", created_at: "2025-02-19T12:31:00Z" },
      { role: 'interviewee', message: "I've been using Node.js for building scalable backend services...", created_at: "2025-02-19T12:32:30Z" },
      { role: 'interviewer', message: "Describe a project where you utilized Node.js for building APIs.", created_at: "2025-02-19T12:35:00Z" },
      { role: 'interviewee', message: "I built a RESTful API for [Application] using Express.js...", created_at: "2025-02-19T12:37:00Z" },
      { role: 'interviewer', message: "How do you handle asynchronous operations in Node.js?", created_at: "2025-02-19T12:40:00Z" },
      { role: 'interviewee', message: "I use Promises and async/await to manage asynchronous code.", created_at: "2025-02-19T12:41:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to debug a performance issue in a Node.js application.", created_at: "2025-02-19T12:44:00Z" },
      { role: 'interviewee', message: "We had a high CPU usage issue caused by [Root Cause]...", created_at: "2025-02-19T12:46:00Z" },
      { role: 'interviewer', message: "How did you identify and fix it?", created_at: "2025-02-19T12:48:00Z" },
      { role: 'interviewee', message: "We used profiling tools and optimized the problematic code section.", created_at: "2025-02-19T12:49:30Z" },
      { role: 'interviewer', message: "Good. Do you have any questions for me?", created_at: "2025-02-19T12:52:00Z" },
      { role: 'interviewee', message: "What are the security practices the team follows for Node.js applications?", created_at: "2025-02-19T12:53:30Z" },
      { role: 'interviewer', message: "We follow OWASP guidelines and conduct regular security audits...", created_at: "2025-02-19T12:55:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-02-19T12:58:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-02-19T12:59:00Z" },
    ]
  },
  {
    id: 119,
    job_application_id: 20, // Single Interview
    created_at: "2025-02-22T16:45:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience as an Account Manager?", created_at: "2025-02-22T16:46:00Z" },
      { role: 'interviewee', message: "I've managed a portfolio of diverse client accounts...", created_at: "2025-02-22T16:47:30Z" },
      { role: 'interviewer', message: "Describe a situation where you successfully resolved a difficult client issue.", created_at: "2025-02-22T16:50:00Z" },
      { role: 'interviewee', message: "A client was unhappy with [Issue]...", created_at: "2025-02-22T16:52:00Z" },
      { role: 'interviewer', message: "How did you approach it?", created_at: "2025-02-22T16:54:00Z" },
      { role: 'interviewee', message: "I actively listened to their concerns, apologized for the inconvenience, and offered a solution...", created_at: "2025-02-22T16:55:30Z" },
      { role: 'interviewer', message: "What are your strategies for building strong client relationships?", created_at: "2025-02-22T16:58:00Z" },
      { role: 'interviewee', message: "I believe in open communication, understanding their needs, and providing excellent service.", created_at: "2025-02-22T16:59:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to upsell or cross-sell to a client.", created_at: "2025-02-22T17:02:00Z" },
      { role: 'interviewee', message: "I identified an opportunity for a client to benefit from [Another Product/Service]...", created_at: "2025-02-22T17:04:00Z" },
      { role: 'interviewer', message: "How did you pitch it?", created_at: "2025-02-22T17:06:00Z" },
      { role: 'interviewee', message: "I highlighted the value proposition and how it would address their specific needs.", created_at: "2025-02-22T17:07:30Z" },
      { role: 'interviewer', message: "Good. Do you have any questions for me?", created_at: "2025-02-22T17:10:00Z" },
      { role: 'interviewee', message: "What is the typical client base for this role?", created_at: "2025-02-22T17:11:30Z" },
      { role: 'interviewer', message: "You would be working with a mix of [Client Types]...", created_at: "2025-02-22T17:13:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-02-22T17:16:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-02-22T17:17:00Z" },
    ]
  },
  {
    id: 120,
    job_application_id: 25, // Single Interview
    created_at: "2025-02-27T16:45:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience as a Content Marketing Manager?", created_at: "2025-02-27T16:46:00Z" },
      { role: 'interviewee', message: "I've developed and executed content strategies across various platforms...", created_at: "2025-02-27T16:47:30Z" },
      { role: 'interviewer', message: "Describe a successful content marketing campaign you led.", created_at: "2025-02-27T16:50:00Z" },
      { role: 'interviewee', message: "I launched a campaign focused on [Topic] that generated significant engagement and leads.", created_at: "2025-02-27T16:52:00Z" },
      { role: 'interviewer', message: "How do you measure the effectiveness of content?", created_at: "2025-02-27T16:54:00Z" },
      { role: 'interviewee', message: "I track metrics like website traffic, social shares, lead generation, and conversion rates.", created_at: "2025-02-27T16:55:30Z" },
      { role: 'interviewer', message: "What are your strategies for creating engaging content?", created_at: "2025-02-27T16:58:00Z" },
      { role: 'interviewee', message: "I focus on understanding the target audience, creating valuable and relevant content, and using compelling visuals.", created_at: "2025-02-27T16:59:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to adapt your content strategy.", created_at: "2025-02-27T17:02:00Z" },
      { role: 'interviewee', message: "Based on analytics, we noticed certain content formats were performing better...", created_at: "2025-02-27T17:04:00Z" },
      { role: 'interviewer', message: "How did you respond?", created_at: "2025-02-27T17:06:00Z" },
      { role: 'interviewee', message: "We shifted our focus to produce more of those high-performing formats.", created_at: "2025-02-27T17:07:30Z" },
      { role: 'interviewer', message: "Good. Do you have any questions for me?", created_at: "2025-02-27T17:10:00Z" },
      { role: 'interviewee', message: "What are the key content marketing goals for the team?", created_at: "2025-02-27T17:11:30Z" },
      { role: 'interviewer', message: "We are focused on [Goal A] and increasing our [Metric]...", created_at: "2025-02-27T17:13:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-02-27T17:16:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-02-27T17:17:00Z" },
    ]
  },
  {
    id: 121,
    job_application_id: 30, // Single Interview
    created_at: "2025-03-04T17:45:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience as a Customer Success Manager?", created_at: "2025-03-04T17:46:00Z" },
      { role: 'interviewee', message: "I've focused on building strong relationships with customers and ensuring their success with our product...", created_at: "2025-03-04T17:47:30Z" },
      { role: 'interviewer', message: "Describe a time you went above and beyond to ensure customer satisfaction.", created_at: "2025-03-04T17:50:00Z" },
      { role: 'interviewee', message: "A key customer was facing a complex issue with integration...", created_at: "2025-03-04T17:52:00Z" },
      { role: 'interviewer', message: "How did you handle it?", created_at: "2025-03-04T17:54:00Z" },
      { role: 'interviewee', message: "I collaborated with the technical team to find a solution and stayed in constant communication with the customer.", created_at: "2025-03-04T17:55:30Z" },
      { role: 'interviewer', message: "What are your strategies for proactively identifying potential customer churn?", created_at: "2025-03-04T17:58:00Z" },
      { role: 'interviewee', message: "I monitor usage patterns, conduct regular check-ins, and gather feedback to address concerns early.", created_at: "2025-03-04T17:59:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to onboard a new customer.", created_at: "2025-03-04T18:02:00Z" },
      { role: 'interviewee', message: "I created a customized onboarding plan based on their specific needs and goals.", created_at: "2025-03-04T18:04:00Z" },
      { role: 'interviewer', message: "What was the outcome?", created_at: "2025-03-04T18:06:00Z" },
      { role: 'interviewee', message: "The customer was successfully onboarded and quickly saw value in the product.", created_at: "2025-03-04T18:07:30Z" },
      { role: 'interviewer', message: "Good. Do you have any questions for me?", created_at: "2025-03-04T18:10:00Z" },
      { role: 'interviewee', message: "What are the key performance indicators for a Customer Success Manager in this role?", created_at: "2025-03-04T18:11:30Z" },
      { role: 'interviewer', message: "We focus on customer retention, expansion revenue, and customer satisfaction scores.", created_at: "2025-03-04T18:13:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-04T18:16:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-03-04T18:17:00Z" },
    ]
  },
  {
    id: 122,
    job_application_id: 35, // Single Interview
    created_at: "2025-03-07T15:45:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience as a Social Media Manager?", created_at: "2025-03-07T15:46:00Z" },
      { role: 'interviewee', message: "I've managed social media presence and campaigns for various brands...", created_at: "2025-03-07T15:47:30Z" },
      { role: 'interviewer', message: "Describe a successful social media campaign you led.", created_at: "2025-03-07T15:50:00Z" },
      { role: 'interviewee', message: "I created a viral campaign on [Platform] that significantly increased brand awareness.", created_at: "2025-03-07T15:52:00Z" },
      { role: 'interviewer', message: "How do you measure the success of a social media campaign?", created_at: "2025-03-07T15:54:00Z" },
      { role: 'interviewee', message: "I track engagement rates, reach, follower growth, and website traffic from social channels.", created_at: "2025-03-07T15:55:30Z" },
      { role: 'interviewer', message: "What are your strategies for engaging with the online community?", created_at: "2025-03-07T15:58:00Z" },
      { role: 'interviewee', message: "I respond to comments and messages, participate in relevant conversations, and foster a sense of community.", created_at: "2025-03-07T15:59:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to handle negative feedback on social media.", created_at: "2025-03-07T16:02:00Z" },
      { role: 'interviewee', message: "A customer expressed dissatisfaction with our product on Twitter...", created_at: "2025-03-07T16:04:00Z" },
      { role: 'interviewer', message: "How did you respond?", created_at: "2025-03-07T16:06:00Z" },
      { role: 'interviewee', message: "I responded promptly and professionally, acknowledged their concern, and offered to resolve the issue privately.", created_at: "2025-03-07T16:07:30Z" },
      { role: 'interviewer', message: "Good. Do you have any questions for me?", created_at: "2025-03-07T16:10:00Z" },
      { role: 'interviewee', message: "What are the main social media platforms the company is currently focused on?", created_at: "2025-03-07T16:11:30Z" },
      { role: 'interviewer', message: "We prioritize presence on [Platform A] and [Platform B]...", created_at: "2025-03-07T16:13:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-07T16:16:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-03-07T16:17:00Z" },
    ]
  },
  {
    id: 123,
    job_application_id: 40, // Single Interview
    created_at: "2025-03-12T16:45:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience as a Technical Account Manager?", created_at: "2025-03-12T16:46:00Z" },
      { role: 'interviewee', message: "I've provided technical support and managed client relationships for [Product/Service]...", created_at: "2025-03-12T16:47:30Z" },
      { role: 'interviewer', message: "Describe a complex technical issue you helped a client resolve.", created_at: "2025-03-12T16:50:00Z" },
      { role: 'interviewee', message: "A client was experiencing difficulties integrating our API with their system...", created_at: "2025-03-12T16:52:00Z" },
      { role: 'interviewer', message: "How did you troubleshoot and resolve it?", created_at: "2025-03-12T16:54:00Z" },
      { role: 'interviewee', message: "I worked closely with their technical team, reviewed logs, and provided step-by-step guidance.", created_at: "2025-03-12T16:55:30Z" },
      { role: 'interviewer', message: "What are your strategies for managing client expectations?", created_at: "2025-03-12T16:58:00Z" },
      { role: 'interviewee', message: "I ensure clear communication, set realistic timelines, and provide regular updates.", created_at: "2025-03-12T16:59:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to educate a client on a technical topic.", created_at: "2025-03-12T17:02:00Z" },
      { role: 'interviewee', message: "I explained the benefits of [Technical Feature] to a client who was not familiar with it...", created_at: "2025-03-12T17:04:00Z" },
      { role: 'interviewer', message: "How did you make it easy for them to understand?", created_at: "2025-03-12T17:06:00Z" },
      { role: 'interviewee', message: "I used simple analogies and focused on the practical advantages for their business.", created_at: "2025-03-12T17:07:30Z" },
      { role: 'interviewer', message: "Good. Do you have any questions for me?", created_at: "2025-03-12T17:10:00Z" },
      { role: 'interviewee', message: "What is the level of technical expertise required for this role?", created_at: "2025-03-12T17:11:30Z" },
      { role: 'interviewer', message: "You need a strong understanding of our product's technical aspects and the ability to communicate them effectively.", created_at: "2025-03-12T17:13:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-12T17:16:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-03-12T17:17:00Z" },
    ]
  },
  {
    id: 124,
    job_application_id: 45, // Single Interview
    created_at: "2025-03-17T16:45:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience as an SEO Specialist?", created_at: "2025-03-17T16:46:00Z" },
      { role: 'interviewee', message: "I've focused on improving website rankings and organic traffic...", created_at: "2025-03-17T16:47:30Z" },
      { role: 'interviewer', message: "Describe a successful SEO campaign you led.", created_at: "2025-03-17T16:50:00Z" },
      { role: 'interviewee', message: "I optimized the website content and structure for [Keywords] which led to a significant increase in organic traffic.", created_at: "2025-03-17T16:52:00Z" },
      { role: 'interviewer', message: "How do you conduct keyword research?", created_at: "2025-03-17T16:54:00Z" },
      { role: 'interviewee', message: "I use tools like Ahrefs and SEMrush to identify relevant keywords with high search volume and low competition.", created_at: "2025-03-17T16:55:30Z" },
      { role: 'interviewer', message: "What are your strategies for link building?", created_at: "2025-03-17T16:58:00Z" },
      { role: 'interviewee', message: "I focus on acquiring high-quality backlinks from reputable websites through outreach and content promotion.", created_at: "2025-03-17T16:59:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to recover from an algorithm update.", created_at: "2025-03-17T17:02:00Z" },
      { role: 'interviewee', message: "Our website experienced a dip in rankings after a Google update...", created_at: "2025-03-17T17:04:00Z" },
      { role: 'interviewer', message: "How did you address it?", created_at: "2025-03-17T17:06:00Z" },
      { role: 'interviewee', message: "I analyzed the update's impact and made necessary adjustments to our content and technical SEO.", created_at: "2025-03-17T17:07:30Z" },
      { role: 'interviewer', message: "Good. Do you have any questions for me?", created_at: "2025-03-17T17:10:00Z" },
      { role: 'interviewee', message: "What are the key SEO challenges the company is currently facing?", created_at: "2025-03-17T17:11:30Z" },
      { role: 'interviewer', message: "We're working on improving our mobile SEO and local search presence...", created_at: "2025-03-17T17:13:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-17T17:16:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-03-17T17:17:00Z" },
    ]
  },
  {
    id: 125,
    job_application_id: 50, // Single Interview
    created_at: "2025-03-22T17:45:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thanks for joining. Can you tell me about your experience as a Solutions Architect?", created_at: "2025-03-22T17:46:00Z" },
      { role: 'interviewee', message: "I've designed and implemented technical solutions for various clients and industries...", created_at: "2025-03-22T17:47:30Z" },
      { role: 'interviewer', message: "Describe a complex solution you designed for a client.", created_at: "2025-03-22T17:50:00Z" },
      { role: 'interviewee', message: "I designed a cloud-based solution to address a client's data processing needs...", created_at: "2025-03-22T17:52:00Z" },
      { role: 'interviewer', message: "What technologies did you utilize?", created_at: "2025-03-22T17:54:00Z" },
      { role: 'interviewee', message: "We used [Cloud Platform] services and integrated with their existing systems.", created_at: "2025-03-22T17:55:30Z" },
      { role: 'interviewer', message: "How do you ensure scalability and reliability in your solutions?", created_at: "2025-03-22T17:58:00Z" },
      { role: 'interviewee', message: "I use architectural patterns that support scalability and implement redundancy and monitoring.", created_at: "2025-03-22T17:59:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to present a technical solution to a non-technical audience.", created_at: "2025-03-22T18:02:00Z" },
      { role: 'interviewee', message: "I presented a complex database migration plan to the business stakeholders...", created_at: "2025-03-22T18:04:00Z" },
      { role: 'interviewer', message: "How did you simplify it?", created_at: "2025-03-22T18:06:00Z" },
      { role: 'interviewee', message: "I focused on the business benefits and used visual aids to illustrate the process.", created_at: "2025-03-22T18:07:30Z" },
      { role: 'interviewer', message: "Good. Do you have any questions for me?", created_at: "2025-03-22T18:10:00Z" },
      { role: 'interviewee', message: "What are the typical types of projects I would be working on?", created_at: "2025-03-22T18:11:30Z" },
      { role: 'interviewer', message: "You would be involved in designing solutions for [Project Types]...", created_at: "2025-03-22T18:13:00Z" },
      { role: 'interviewer', message: "Thanks for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-22T18:16:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I appreciate the opportunity.", created_at: "2025-03-22T18:17:00Z" },
    ]
  },
  // Adding more interviews to meet the ratio requirements.
  // Two Interviews (targeting around 7-8 total with existing ones)
  {
    id: 126,
    job_application_id: 1, // Now has 2 interviews
    created_at: "2025-02-17T10:00:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back [Candidate Name]. This round is with the hiring manager.", created_at: "2025-02-17T10:01:00Z" },
      { role: 'interviewee', message: "It's great to be here.", created_at: "2025-02-17T10:02:00Z" },
      { role: 'interviewer', message: "What are your career goals?", created_at: "2025-02-17T10:04:00Z" },
      { role: 'interviewee', message: "I'm looking for an opportunity to [Goal] and contribute to impactful projects...", created_at: "2025-02-17T10:06:00Z" },
      { role: 'interviewer', message: "Why are you interested in this specific role and company?", created_at: "2025-02-17T10:08:00Z" },
      { role: 'interviewee', message: "I'm impressed by [Company's Work] and believe my skills align well with the role's requirements.", created_at: "2025-02-17T10:09:30Z" },
      { role: 'interviewer', message: "How do you handle working under pressure and meeting deadlines?", created_at: "2025-02-17T10:12:00Z" },
      { role: 'interviewee', message: "I prioritize tasks, manage my time effectively, and communicate proactively if there are potential delays.", created_at: "2025-02-17T10:13:30Z" },
      { role: 'interviewer', message: "Tell me about a time you received constructive criticism and how you responded.", created_at: "2025-02-17T10:15:00Z" },
      { role: 'interviewee', message: "I received feedback on [Area] and used it as an opportunity to improve my skills in that area.", created_at: "2025-02-17T10:16:30Z" },
      { role: 'interviewer', message: "Do you have any questions for me about the team or the company?", created_at: "2025-02-17T10:19:00Z" },
      { role: 'interviewee', message: "What are the key qualities you look for in a successful team member?", created_at: "2025-02-17T10:20:30Z" },
      { role: 'interviewer', message: "We value collaboration, proactivity, and a willingness to learn...", created_at: "2025-02-17T10:22:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-02-17T10:25:00Z" },
      { role: 'interviewee', message: "Thank you, [Interviewer Name]. I look forward to hearing from you.", created_at: "2025-02-17T10:26:00Z" },
    ]
  },
  {
    id: 127,
    job_application_id: 12, // Now has 2 interviews
    created_at: "2025-02-21T10:30:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back [Candidate Name]. This interview is with the team lead.", created_at: "2025-02-21T10:31:00Z" },
      { role: 'interviewee', message: "Great to meet you.", created_at: "2025-02-21T10:32:00Z" },
      { role: 'interviewer', message: "Can you describe your experience working in a team environment?", created_at: "2025-02-21T10:34:00Z" },
      { role: 'interviewee', message: "I enjoy collaborating with colleagues and believe in open communication...", created_at: "2025-02-21T10:36:00Z" },
      { role: 'interviewer', message: "How do you handle disagreements or conflicts within a team?", created_at: "2025-02-21T10:38:00Z" },
      { role: 'interviewee', message: "I focus on finding common ground and finding solutions that benefit the team.", created_at: "2025-02-21T10:39:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to mentor or help a less experienced team member.", created_at: "2025-02-21T10:42:00Z" },
      { role: 'interviewee', message: "I helped a junior colleague understand [Concept] by explaining it and working through an example together.", created_at: "2025-02-21T10:43:30Z" },
      { role: 'interviewer', message: "What is your preferred working style?", created_at: "2025-02-21T10:45:00Z" },
      { role: 'interviewee', message: "I thrive in a collaborative environment where ideas are shared and discussed openly.", created_at: "2025-02-21T10:46:30Z" },
      { role: 'interviewer', message: "Do you have any questions about the team dynamics or projects?", created_at: "2025-02-21T10:49:00Z" },
      { role: 'interviewee', message: "What is the typical sprint duration and meeting cadence?", created_at: "2025-02-21T10:50:30Z" },
      { role: 'interviewer', message: "We have two-week sprints with daily stand-ups and regular sprint reviews...", created_at: "2025-02-21T10:52:00Z" },
      { role: 'interviewer', message: "Thank you for your time. We'll be in touch.", created_at: "2025-02-21T10:55:00Z" },
      { role: 'interviewee', message: "Thank you, I enjoyed the conversation.", created_at: "2025-02-21T10:56:00Z" },
    ]
  },
  {
    id: 128,
    job_application_id: 22, // Now has 2 interviews
    created_at: "2025-03-10T11:30:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back [Candidate Name]. This round is with another research scientist.", created_at: "2025-03-10T11:31:00Z" },
      { role: 'interviewee', message: "Good to meet you.", created_at: "2025-03-10T11:32:00Z" },
      { role: 'interviewer', message: "Can you discuss your experience with experimental design in AI research?", created_at: "2025-03-10T11:34:00Z" },
      { role: 'interviewee', message: "I focus on designing experiments to rigorously evaluate model performance and identify key factors...", created_at: "2025-03-10T11:36:00Z" },
      { role: 'interviewer', message: "How do you handle interpretability and explainability of complex AI models?", created_at: "2025-03-10T11:38:00Z" },
      { role: 'interviewee', message: "I use techniques like LIME and SHAP to understand model predictions.", created_at: "2025-03-10T11:39:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to deal with unexpected results in your research.", created_at: "2025-03-10T11:42:00Z" },
      { role: 'interviewee', message: "We observed unusual behavior in a model's performance...", created_at: "2025-03-10T11:44:00Z" },
      { role: 'interviewer', message: "How did you investigate and understand the root cause?", created_at: "2025-03-10T11:46:00Z" },
      { role: 'interviewee', message: "We analyzed the data, the model architecture, and the training process to pinpoint the issue.", created_at: "2025-03-10T11:47:30Z" },
      { role: 'interviewer', message: "Excellent. Do you have any questions about the research environment or collaborations?", created_at: "2025-03-10T11:50:00Z" },
      { role: 'interviewee', message: "What are the opportunities for publishing research findings?", created_at: "2025-03-10T11:51:30Z" },
      { role: 'interviewer', message: "We encourage publishing in top-tier conferences and journals...", created_at: "2025-03-10T11:53:00Z" },
      { role: 'interviewer', message: "Thank you for your time. We'll be in touch.", created_at: "2025-03-10T11:56:00Z" },
      { role: 'interviewee', message: "Thank you, I enjoyed the technical discussion.", created_at: "2025-03-10T11:57:00Z" },
    ]
  },
  {
    id: 129,
    job_application_id: 32, // Now has 2 interviews
    created_at: "2025-03-20T10:30:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back [Candidate Name]. This interview is with the VP of Engineering.", created_at: "2025-03-20T10:31:00Z" },
      { role: 'interviewee', message: "It's a pleasure to meet you.", created_at: "2025-03-20T10:32:00Z" },
      { role: 'interviewer', message: "What are your thoughts on the future of deep learning?", created_at: "2025-03-20T10:34:00Z" },
      { role: 'interviewee', message: "I believe we will see continued advancements in areas like [Area] and [Another Area]...", created_at: "2025-03-20T10:36:00Z" },
      { role: 'interviewer', message: "How do you stay ahead of the curve in this rapidly evolving field?", created_at: "2025-03-20T10:38:00Z" },
      { role: 'interviewee', message: "I actively follow research papers, attend conferences, and experiment with new techniques.", created_at: "2025-03-20T10:39:30Z" },
      { role: 'interviewer', message: "Describe a time you had to influence stakeholders on a technical decision.", created_at: "2025-03-20T10:42:00Z" },
      { role: 'interviewee', message: "I advocated for using [Technology] for a new project...", created_at: "2025-03-20T10:44:00Z" },
      { role: 'interviewer', message: "How did you build consensus?", created_at: "2025-03-20T10:46:00Z" },
      { role: 'interviewee', message: "I presented the technical advantages and the potential business impact.", created_at: "2025-03-20T10:47:30Z" },
      { role: 'interviewer', message: "Excellent. Do you have any questions for me about the company's technical strategy?", created_at: "2025-03-20T10:50:00Z" },
      { role: 'interviewee', message: "What is the long-term vision for AI within the company?", created_at: "2025-03-20T10:51:30Z" },
      { role: 'interviewer', message: "We see AI as a key enabler for [Company Goal]...", created_at: "2025-03-20T10:53:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-20T10:56:00Z" },
      { role: 'interviewee', message: "Thank you, I appreciate the discussion.", created_at: "2025-03-20T10:57:00Z" },
    ]
  },
  // Three Interviews (targeting around 2-3 total with existing ones)
  {
    id: 130,
    job_application_id: 13, // Already has 3 interviews
    created_at: "2025-03-08T13:00:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], thank you for making it to the final round. This is a behavioral interview.", created_at: "2025-03-08T13:01:00Z" },
      { role: 'interviewee', message: "Thank you for having me.", created_at: "2025-03-08T13:02:00Z" },
      { role: 'interviewer', message: "Tell me about a time you failed at something. What did you learn?", created_at: "2025-03-08T13:04:00Z" },
      { role: 'interviewee', message: "On a project, we missed a key deadline...", created_at: "2025-03-08T13:06:00Z" },
      { role: 'interviewer', message: "What was the reason for the failure?", created_at: "2025-03-08T13:08:00Z" },
      { role: 'interviewee', message: "We underestimated the complexity of [Task]...", created_at: "2025-03-08T13:09:30Z" },
      { role: 'interviewer', message: "How did you handle the situation and what did you learn for the future?", created_at: "2025-03-08T13:12:00Z" },
      { role: 'interviewee', message: "We communicated the delay to stakeholders and adjusted our project planning process to include more buffer time.", created_at: "2025-03-08T13:13:30Z" },
      { role: 'interviewer', message: "Describe a time you had to deal with ambiguity or uncertainty.", created_at: "2025-03-08T13:15:00Z" },
      { role: 'interviewee', message: "In a new market, there was a lot of uncertainty about customer preferences...", created_at: "2025-03-08T13:16:30Z" },
      { role: 'interviewer', message: "How did you navigate that?", created_at: "2025-03-08T13:18:00Z" },
      { role: 'interviewee', message: "We conducted market research and ran experiments to gather data and inform our decisions.", created_at: "2025-03-08T13:19:30Z" },
      { role: 'interviewer', message: "Do you have any questions for us?", created_at: "2025-03-08T13:22:00Z" },
      { role: 'interviewee', message: "What are the biggest challenges the product team is currently facing?", created_at: "2025-03-08T13:23:30Z" },
      { role: 'interviewer', message: "We are focused on scaling the product to support a growing user base...", created_at: "2025-03-08T13:25:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch soon.", created_at: "2025-03-08T13:28:00Z" },
      { role: 'interviewee', message: "Thank you, I appreciate the opportunity.", created_at: "2025-03-08T13:29:00Z" },
    ]
  },
  {
    id: 131,
    job_application_id: 1, // Now has 3 interviews
    created_at: "2025-02-24T10:00:00Z",
    chats: [
      { role: 'interviewer', message: "Hello [Candidate Name], this is our final interview. We'd like to discuss your motivations and fit for the company culture.", created_at: "2025-02-24T10:01:00Z" },
      { role: 'interviewee', message: "Thank you for reaching out.", created_at: "2025-02-24T10:02:00Z" },
      { role: 'interviewer', message: "What motivates you in your work?", created_at: "2025-02-24T10:04:00Z" },
      { role: 'interviewee', message: "I'm motivated by challenging problems and the opportunity to build impactful software...", created_at: "2025-02-24T10:06:00Z" },
      { role: 'interviewer', message: "What kind of work environment do you thrive in?", created_at: "2025-02-24T10:08:00Z" },
      { role: 'interviewee', message: "I prefer a collaborative and innovative environment where I can continuously learn and grow.", created_at: "2025-02-24T10:09:30Z" },
      { role: 'interviewer', message: "Tell me about a time you went above and beyond in your role.", created_at: "2025-02-24T10:12:00Z" },
      { role: 'interviewee', message: "I volunteered to work on a critical feature that was outside my core responsibilities...", created_at: "2025-02-24T10:14:00Z" },
      { role: 'interviewer', message: "What was the impact of your contribution?", created_at: "2025-02-24T10:16:00Z" },
      { role: 'interviewee', message: "It helped us launch the product on time and received positive feedback from users.", created_at: "2025-02-24T10:17:30Z" },
      { role: 'interviewer', message: "Do you have any final questions?", created_at: "2025-02-24T10:20:00Z" },
      { role: 'interviewee', message: "What are the opportunities for professional development within the company?", created_at: "2025-02-24T10:21:30Z" },
      { role: 'interviewer', message: "We offer various training programs and encourage participation in industry events...", created_at: "2025-02-24T10:23:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch with a decision soon.", created_at: "2025-02-24T10:26:00Z" },
      { role: 'interviewee', message: "Thank you for the opportunity. I'm very excited about this role.", created_at: "2025-02-24T10:27:00Z" },
    ]
  },
  {
    id: 132,
    job_application_id: 5, // Now has 3 interviews
    created_at: "2025-02-19T11:00:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back, [Candidate Name]. This is our final interview, focusing on your strategic vision.", created_at: "2025-02-19T11:01:00Z" },
      { role: 'interviewee', message: "Thank you for the opportunity.", created_at: "2025-02-19T11:02:00Z" },
      { role: 'interviewer', message: "How do you see the future of digital marketing evolving?", created_at: "2025-02-19T11:04:00Z" },
      { role: 'interviewee', message: "I believe we will see increased personalization, emphasis on data privacy, and the rise of new platforms...", created_at: "2025-02-19T11:06:00Z" },
      { role: 'interviewer', message: "How do you build and lead a high-performing marketing team?", created_at: "2025-02-19T11:08:00Z" },
      { role: 'interviewee', message: "I focus on hiring talented individuals, fostering a collaborative environment, and providing clear goals and feedback.", created_at: "2025-02-19T11:09:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to make a difficult decision regarding marketing budget allocation.", created_at: "2025-02-19T11:12:00Z" },
      { role: 'interviewee', message: "We had to decide between investing more in [Channel A] or [Channel B]...", created_at: "2025-02-19T11:14:00Z" },
      { role: 'interviewer', message: "What was your decision process?", created_at: "2025-02-19T11:16:00Z" },
      { role: 'interviewee', message: "I analyzed the ROI of each channel and considered the overall marketing objectives.", created_at: "2025-02-19T11:17:30Z" },
      { role: 'interviewer', message: "Do you have any final questions for us?", created_at: "2025-02-19T11:20:00Z" },
      { role: 'interviewee', message: "What are the biggest growth opportunities for the company in the next year?", created_at: "2025-02-19T11:21:30Z" },
      { role: 'interviewer', message: "We are targeting expansion into [New Market] and launching [New Product]...", created_at: "2025-02-19T11:23:00Z" },
      { role: 'interviewer', message: "Thank you for your time, [Candidate Name]. We'll be in touch with a decision soon.", created_at: "2025-02-19T11:26:00Z" },
      { role: 'interviewee', message: "Thank you for the thorough process. I'm very enthusiastic about this opportunity.", created_at: "2025-02-19T11:27:00Z" },
    ]
  },
  {
    id: 133,
    job_application_id: 18, // Now has 2 interviews
    created_at: "2025-02-27T14:00:00Z",
    chats: [
      { role: 'interviewer', message: "Welcome back [Candidate Name]. This round is with a senior business analyst.", created_at: "2025-02-27T14:01:00Z" },
      { role: 'interviewee', message: "Good to meet you.", created_at: "2025-02-27T14:02:00Z" },
      { role: 'interviewer', message: "Can you describe your experience with agile methodologies?", created_at: "2025-02-27T14:04:00Z" },
      { role: 'interviewee', message: "I've worked in Scrum teams, participating in sprint planning, daily stand-ups, and retrospectives...", created_at: "2025-02-27T14:06:00Z" },
      { role: 'interviewer', message: "How do you ensure that requirements are clearly communicated to the development team?", created_at: "2025-02-27T14:08:00Z" },
      { role: 'interviewee', message: "I use user stories, acceptance criteria, and diagrams to document requirements and hold clarification sessions.", created_at: "2025-02-27T14:09:30Z" },
      { role: 'interviewer', message: "Tell me about a time you had to adapt to changing requirements.", created_at: "2025-02-27T14:12:00Z" },
      { role: 'interviewee', message: "During a project, there was a significant change in scope...", created_at: "2025-02-27T14:14:00Z" },
      { role: 'interviewer', message: "How did you manage that?", created_at: "2025-02-27T14:16:00Z" },
      { role: 'interviewee', message: "I assessed the impact of the changes, updated the documentation, and communicated the impact to all stakeholders.", created_at: "2025-02-27T14:17:30Z" },
      { role: 'interviewer', message: "Excellent. Do you have any questions about the team or the projects?", created_at: "2025-02-27T14:20:00Z" },
      { role: 'interviewee', message: "What are the biggest challenges the team is currently working on?", created_at: "2025-02-27T14:21:30Z" },
      { role: 'interviewer', message: "We're working on improving our data reporting capabilities...", created_at: "2025-02-27T14:23:00Z" },
      { role: 'interviewer', message: "Thank you for your time. We'll be in touch.", created_at: "2025-02-27T14:26:00Z" },
      { role: 'interviewee', message: "Thank you, I enjoyed the discussion.", created_at: "2025-02-27T14:27:00Z" },
    ]
  },
  // Job Applications with no interviews (approx. 17-18) - The remaining Job Applications in the list will have no interviews.
];


export default INTERVIEWS;
