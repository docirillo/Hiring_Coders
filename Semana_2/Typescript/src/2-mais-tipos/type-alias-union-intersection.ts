type User = {
  name: string;
  lastName: string;
  dateOfBirth: string;
  age?: number;
};

//? torna o campo opcional.

const daniel: User = {
  name: 'Daniel',
  lastName: 'Cirillo',
  dateOfBirth: '10/06/1989',
};

//Union Types
//serve para indicar se um parâmetro precisa ser de um tipo ou de outro
//como se fosse o or, mas aplicado para tipagem do elemento

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel) {
  console.log(`[${level}] - ${message}`);
}

logMessage('Uma mensagem de informação', 'info');
logMessage('Uma mensagem de erro', 'error');
logMessage('Uma mensagem de debug', 'debug');

//Intersection Types
//Caracterizados pelo &
//agrupa vários type alias

type About = {
  bio: string;
  interests: string[];
};

type Profile = User & About;

const userWithProfile: Profile = {
  name: 'Daniel',
  lastName: 'Cirillo',
  dateOfBirth: '10/06/1989',
  bio: 'Olá, meu nome é Daniel, estou aprendendo TS',
  interests: ['games', 'sleep', 'chillout'],
};
