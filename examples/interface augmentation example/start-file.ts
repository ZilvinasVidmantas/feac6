import { type Human} from './Human';



declare module "./Human" {
  interface Human {
    surname: string
  }
}


const human: Human = {
  name: 'John Doe',
  age: 25,
  isAdult: true,
  surname: 'Doe'
};


interface IncreamentButtonProps {
  onClick: () => Promise<number>;
}

const Button =(props: IncreamentButtonProps) => {

}




Button({onClick: () => Promise.resolve(1)})
Button({onClick: () => Promise.resolve(2)})
Button({onClick: () => Promise.resolve(3)})

// interface IncreamentButtonProps {
//   color: string;
// }