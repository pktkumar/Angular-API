export class MyComponent{

    
    parentMethod(): any {
        console.log('Parent method called');
        return data;
      }

    myNewMethod():any{
        console.log('from my mehtod');
       return data;   
     }
}

const data = [
  { id: 1, name: '2025 Kumar Vaduganathan' },
  { id: 2, name: 'Vaduganathan' },
  { id: 3, name: 'Kumar' },
];
