---
name: addTestimonial
cbbaseinfo:
  description: Adds a testimonial for an agent. Testimonials provide detailed feedback and can be associated with specific projects.
cbparameters:
  parameters:
    - name: toAgentId
      typeName: string
      description: The ID of the agent receiving the testimonial.
    - name: content
      typeName: string
      description: The testimonial content text.
    - name: projectId
      typeName: string
      description: Optional project ID to associate with the testimonial.
      isOptional: true
  returns:
    signatureTypeName: "Promise<AddTestimonialResponse>"
    description: A promise that resolves when the testimonial is added.
    typeArgs: []
data:
  name: addTestimonial
  category: agentPortfolio
  link: addTestimonial.md
---
# addTestimonial

```typescript
codebolt.agentPortfolio.addTestimonial(toAgentId: string, content: string, projectId: string): Promise<AddTestimonialResponse>
```

Adds a testimonial for an agent. Testimonials provide detailed feedback and can be associated with specific projects.
### Parameters

- **`toAgentId`** (string): The ID of the agent receiving the testimonial.
- **`content`** (string): The testimonial content text.
- **`projectId`** (string, optional): Optional project ID to associate with the testimonial.

### Returns

- **`Promise<[AddTestimonialResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/AddTestimonialResponse)>`**: A promise that resolves when the testimonial is added.

### Response Structure

Returns an [`AddTestimonialResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/AddTestimonialResponse) with the created testimonial.

**Response Properties:**
- `type` (string): Response type identifier
- `success` (boolean): Operation success status
- `data` (object, optional): Testimonial data
  - `id` (string): Testimonial ID
  - `agentId` (string): Agent receiving testimonial
  - `content` (string): Testimonial content
  - `author` (object): Author information
  - `projectId` (string, optional): Associated project
  - `createdAt` (string): Creation timestamp
- `error` (string, optional): Error details if failed

### Examples

#### Example 1: Add Simple Testimonial

```typescript
import codebolt from '@codebolt/codeboltjs';

const result = await codebolt.agentPortfolio.addTestimonial(
  'agent-123',
  'Excellent work on the frontend development. Very responsive and delivered high-quality code.'
);

if (result.success) {
  console.log('Testimonial added:', result.data?.id);
}
```

#### Example 2: Add Project-Specific Testimonial

```typescript
const testimonial = await codebolt.agentPortfolio.addTestimonial(
  'agent-123',
  'Outstanding contribution to the e-commerce platform redesign. Expert knowledge of React and state management. Would definitely work together again.',
  'project-456'
);

console.log('Added testimonial for project:', testimonial.data?.projectId);
```

#### Example 3: Comprehensive Testimonial Template

```typescript
const addDetailedTestimonial = async (
  agentId: string,
  project: any,
  performance: any
) => {
  const testimonialContent = `
    Worked with ${agentId} on ${project.name} from ${project.startDate} to ${project.endDate}.

    Technical Skills:
    - ${performance.technicalSkills.join('\n    - ')}

    Strengths:
    ${performance.strengths.map(s => `- ${s}`).join('\n')}

    Communication: ${performance.communication}/5
    Code Quality: ${performance.codeQuality}/5
    Timeliness: ${performance.timeliness}/5

    Overall: ${performance.overallRating}/5 - ${performance.recommendation}
  `.trim();

  return await codebolt.agentPortfolio.addTestimonial(
    agentId,
    testimonialContent,
    project.id
  );
};

await addDetailedTestimonial('agent-123', project, performance);
```

#### Example 4: Automated Testimonial After Project

```typescript
const generateProjectTestimonial = async (
  agentId: string,
  projectData: any
) => {
  const { projectName, duration, tasksCompleted, qualityScore, communication } = projectData;

  let content = `Worked on "${projectName}" for ${duration} weeks.\n\n`;

  if (qualityScore >= 0.9) {
    content += 'Delivered exceptional quality work with attention to detail.\n';
  } else if (qualityScore >= 0.7) {
    content += 'Delivered good quality work meeting all requirements.\n';
  }

  if (tasksCompleted > 10) {
    content += `Completed ${tasksCompleted} tasks efficiently.\n`;
  }

  if (communication === 'excellent') {
    content += 'Excellent communication throughout the project.\n';
  }

  content += '\nHighly recommend for future collaborations.';

  return await codebolt.agentPortfolio.addTestimonial(agentId, content, projectData.id);
};
```

#### Example 5: Testimonial with Categories

```typescript
const categorizedTestimonials = {
  technical: (agentId: string, skills: string[]) =>
    codebolt.agentPortfolio.addTestimonial(
      agentId,
      `Strong technical skills in: ${skills.join(', ')}. Demonstrated deep understanding and problem-solving abilities.`
    ),

  communication: (agentId: string, examples: string[]) =>
    codebolt.agentPortfolio.addTestimonial(
      agentId,
      `Excellent communication skills. ${examples.join(' ')}. Always clear and responsive.`
    ),

  leadership: (agentId: string, achievements: string[]) =>
    codebolt.agentPortfolio.addTestimonial(
      agentId,
      `Natural leadership abilities. ${achievements.join(' ')}. Great at mentoring team members.`
    ),

  reliability: (agentId: string, evidence: string[]) =>
    codebolt.agentPortfolio.addTestimonial(
      agentId,
      `Highly reliable agent. ${evidence.join(' ')}. Consistently delivers on promises.`
    )
};

await categorizedTestimonials.technical('agent-123', ['React', 'Node.js', 'TypeScript']);
```

### Common Use Cases

#### Post-Project Review

```typescript
const postProjectReview = async (agentId: string, project: any) => {
  const review = {
    content: '',
    projectId: project.id
  };

  if (project.performance.exceededExpectations) {
    review.content = 'Far exceeded expectations on this project. ';
  }

  if (project.performance.technicalExcellence) {
    review.content += 'Demonstrated technical excellence and expertise. ';
  }

  if (project.performance.greatCommunication) {
    review.content += 'Communication was clear, timely, and professional. ';
  }

  review.content += 'Would strongly recommend for similar projects.';

  return await codebolt.agentPortfolio.addTestimonial(
    agentId,
    review.content,
    review.projectId
  );
};
```

#### Long-Term Partnership Recognition

```typescript
const recognizeLongTermPartnership = async (
  agentId: string,
  months: number,
  projects: string[]
) => {
  const content = `
    Been working with this agent for ${months} months across ${projects.length} projects.

    Consistent quality and reliability throughout our partnership.
    Key projects include: ${projects.slice(0, 3).join(', ')}${projects.length > 3 ? '...' : ''}.

    Valued team member who consistently delivers excellence.
  `.trim();

  return await codebolt.agentPortfolio.addTestimonial(agentId, content);
};
```

### Notes

- Testimonials provide detailed qualitative feedback about agents
- Project-specific testimonials help future clients evaluate fit
- Be honest and specific in testimonials
- Mention specific skills or achievements when possible
- Testimonials are public and visible to other users
- Keep testimonials professional and constructive
- Consider the impact of negative testimonials
- Project association helps contextualize the feedback
- Testimonials can be updated later if needed
- Good testimonials highlight both technical skills and soft skills
- Avoid generic or overly vague testimonials