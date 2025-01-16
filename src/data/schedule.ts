export interface ScheduleEvent {
  id: number;
  title: string;
  type: 'lecture' | 'assignment' | 'exam' | 'meeting';
  course: string;
  date: string;
  time: string;
  location?: string;
  description?: string;
}

export const scheduleEvents: ScheduleEvent[] = [
  {
    id: 1,
    title: 'Operating Systems Lecture',
    type: 'lecture',
    course: 'Operating Systems',
    date: '2024-03-15',
    time: '09:00 AM',
    location: 'Room 301',
    description: 'Process Management and Scheduling'
  },
  {
    id: 2,
    title: 'AI Project Submission',
    type: 'assignment',
    course: 'Artificial Intelligence',
    date: '2024-03-18',
    time: '11:59 PM',
    description: 'Final project submission with documentation'
  },
  {
    id: 3,
    title: 'Mid-term Examination',
    type: 'exam',
    course: 'Software Engineering',
    date: '2024-03-20',
    time: '02:00 PM',
    location: 'Examination Hall 1',
    description: 'Covers modules 1-5'
  },
  {
    id: 4,
    title: 'Study Group Meeting',
    type: 'meeting',
    course: 'Data Structures',
    date: '2024-03-22',
    time: '04:00 PM',
    location: 'Library Discussion Room',
    description: 'Group discussion on Advanced Tree Structures'
  },
  {
    id: 5,
    title: 'Programming Lab',
    type: 'lecture',
    course: 'Computer Programming',
    date: '2024-03-25',
    time: '10:00 AM',
    location: 'Lab 102',
    description: 'Practical session on Object-Oriented Programming'
  }
];