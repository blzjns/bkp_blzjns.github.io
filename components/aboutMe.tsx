// aboutMe.tsx export constants for profile data
export const aboutMe: IAboutMe = {
	name: 'blzjns',
	fullName: 'Jonas Hoehne S.',
	link: 'https://blzjns.github.io/',
	intro: `Experience in Software Engineering, Development, and Dev. Support – Pragmatic, eager to learn and aspired to enrich and unlock not only my knowledge and potential, but also others.`,
	stack: [
		{
			name: 'JavaScript',
			proficiency: 'Proficient',
			isCodingLang: true,
			tags: ['js'],
		},
		{
			name: 'TypeScript',
			proficiency: 'Proficient',
			isCodingLang: true,
			tags: ['js', 'ts'],
		},
		{
			name: 'Java',
			proficiency: 'Proficient',
			isCodingLang: true,
			tags: ['jvm'],
		},
		{
			name: 'Scala',
			proficiency: 'Familiar with',
			isCodingLang: true,
			tags: ['jvm'],
		},
		{
			name: 'Groovy',
			proficiency: 'Exposed to',
			isCodingLang: true,
			tags: ['jvm'],
		},
		{
			name: 'Go Lang',
			proficiency: 'Familiar with',
			isCodingLang: true,
		},
		{
			name: 'C#',
			proficiency: 'Familiar with',
			isCodingLang: true,
			tags: ['.net'],
		},
		{
			name: 'VB',
			proficiency: 'Exposed to',
			isCodingLang: true,
			tags: ['.net'],
		},
		{
			name: 'ASP',
			proficiency: 'Exposed to',
			tags: ['.net'],
		},
		{
			name: 'Node.js',
			proficiency: 'Proficient',
			tags: ['js', 'ts'],
		},
		{
			name: 'Angular',
			proficiency: 'Proficient',
			tags: ['js', 'ts', 'library', 'fe'],
		},
		{
			name: 'React',
			proficiency: 'Proficient',
			tags: ['js', 'ts', 'library', 'fe'],
		},
		{
			name: 'Next.js',
			proficiency: 'Familiar with',
			tags: ['js', 'ts', 'node', 'fe'],
		},
		{
			name: 'Gatsby',
			proficiency: 'Familiar with',
			tags: ['js', 'ts', 'node', 'fe'],
		},
		{
			name: 'Mocha/Karma',
			proficiency: 'Familiar with',
			tags: ['js', 'ts', 'test', 'node'],
		},
		{
			name: 'Jest',
			proficiency: 'Familiar with',
			tags: ['js', 'ts', 'test', 'node'],
		},
		{
			name: 'JQuery',
			proficiency: 'Proficient',
			tags: ['js', 'fe'],
		},
		{
			name: 'HTML',
			proficiency: 'Proficient',
			tags: ['fe'],
		},
		{
			name: 'CSS',
			proficiency: 'Proficient',
			tags: ['fe'],
		},
		{
			name: 'Less',
			proficiency: 'Proficient',
			tags: ['css', 'fe'],
		},
		{
			name: 'Sass/SCSS',
			proficiency: 'Proficient',
			tags: ['css', 'fe'],
		},
		{
			name: 'Kubernetes',
			proficiency: 'Familiar with',
			tags: ['go', 'cloud'],
		},
		{
			name: 'Git',
			proficiency: 'Familiar with',
			tags: ['git', 'bash'],
		},
		{
			name: 'Shell/Bash',
			proficiency: 'Proficient',
			tags: ['bash'],
		},
		{
			name: 'Travis',
			proficiency: 'Proficient',
			tags: ['cicd'],
		},
		{
			name: 'Jenkins',
			proficiency: 'Proficient',
			tags: ['cicd'],
		},
		{
			name: 'Docker',
			proficiency: 'Familiar with',
			tags: ['cloud'],
		},
		{
			name: 'AWS',
			proficiency: 'Exposed to',
			tags: ['cloud'],
		},
		{
			name: 'Azure',
			proficiency: 'Familiar with',
			tags: ['cloud'],
		},
		{
			name: 'GCP',
			proficiency: 'Familiar with',
			tags: ['cloud'],
		},
		{
			name: 'SQL',
			proficiency: 'Proficient',
			isCodingLang: true,
		},
		{
			name: 'MySQL',
			proficiency: 'Familiar with',
			tags: ['sql', 'db'],
		},
		{
			name: 'SQLServer',
			proficiency: 'Familiar with',
			tags: ['sql', 'db'],
		},
		{
			name: 'HANA',
			proficiency: 'Familiar with',
			tags: ['sql', 'db'],
		},
		{
			name: 'Mongo',
			proficiency: 'Proficient',
			tags: ['sql', 'db', 'nosql'],
		},
		{
			name: 'WebAssembly',
			proficiency: 'Interested in',
		},
		{
			name: 'WebGL',
			proficiency: 'Interested in',
		},
		{
			name: 'Flutter',
			proficiency: 'Interested in',
		},
		{
			name: 'Computer Vision [OpenCV, dLib]',
			proficiency: 'Interested in',
		},
		{
			name: 'Machine Learning [TensorFlow]',
			proficiency: 'Interested in',
		},
	],
	workExperience: [
		{
			from: new Date(),
			to: new Date(),
			company: {
                name: 'Kronos | UKG',
                location: 'Montreal',
                role: {
                    title: 'Fullstack Developer',
                    description: '',
                    achievements: [
                        ''
                    ]
                }
            },
		},
	],
};

interface IDevStack {
	name: string;
	proficiency: 'Interested in' | 'Exposed to' | 'Familiar with' | 'Proficient';
	isCodingLang?: boolean;
	tags?: string[];
	relatedExperience?: number; // from IWorkExperience.from.getTime()
}

interface IWorkExperience {
	from: Date;
	to: Date;
	company: {
		name: string;
		location: string;
		role: {
			title: string;
			description: string;
			achievements: string[];
		};
	};
}

interface IAboutMe {
	fullName: string;
	name: string;
	link: string;
	intro: string;
	stack: IDevStack[];
	workExperience: IWorkExperience[];
}
