import type { CSSProperties } from "react";

export function MyAwesomeApp(){

  const firstName = 'Cristopher';
  const lastName = 'Castro';

  const family = ['Jeremy', 'Dana', 'Pato', 'Harry'];

  const styleFisrtName: CSSProperties = { 
    backgroundColor: 'red',
    borderRadius: 20
    }
  return(
    <>
      <div
        style={styleFisrtName}
      >
        {firstName} Con variable.
      </div>
      <p>{lastName} Con variable.</p>

      <div>
        {family.join(', ')}
      </div>
    </>
  );
}