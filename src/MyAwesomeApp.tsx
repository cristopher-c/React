export function MyAwesomeApp(){

  const firstName = 'Cristopher';
  const lastName = 'Castro';

  const family = ['Jeremy', 'Dana', 'Pato', 'Harry'];

  return(
    <>
      <div>{firstName} Con variable.</div>
      <br />
      <p>{lastName} Con variable.</p>

      <div>
        {family.join(', ')}
      </div>
    </>
  );
}