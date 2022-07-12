import { Qualification } from 'src/app/services/qualification.service'

export class QualificationConstants {
  public static EDU_ARR: Qualification[] = [
    { header: 'Bachelor of Information Technology (Honours) in Software Systems Development', date: 'June 2020 - July 2022', school: 'Tunku Abdul Rahman University College (TAR UC)', color: '#9C27B0', icon: 'school' },
    { header: 'Diploma in Science (Computer Science and Management Mathematics)', date: 'May 2018 — Jun 2020', school: 'Tunku Abdul Rahman University College (TAR UC)', color: '#673AB7', icon: 'school' },
    { header: 'Sijil Pelajaran Malaysia (SPM)', date: 'Jan 2013 — Dec 2017', school: 'Sekolah Menengah Kebangsaan Puterijaya', color: '#FF9800', icon: 'school' }
  ]

  public static WORK_ARR: Qualification[] = [
    { header: 'Software Engineer                        ', date: 'Aug 2022 — Present', school: 'Theta Service Partner SDN. BHD.', color: '#9C27B0', icon: 'work' },
    { header: 'Software Engineer Intern                  ', date: 'Jan 2022 — July 2022', school: 'Theta Service Partner SDN. BHD.', color: '#673AB7', icon: 'work' },
    { header: 'Quality Assurance Analyst (Internship)              ', date: 'Feb 2020 — Apr 2020', school: 'Finexus SDN. BHD.', color: '#FF9800', icon: 'work' }
  ]
}
