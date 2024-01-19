
import { PeopleList } from '../components/PeopleList';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/people');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  } 

  let people = await res.json();
  people = people.results;
  return {
    props: { people }
  }
}

export default function Home({people}) {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl mb-3">People Information</h1>
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <PeopleList people={people} />
      </div>
    </main>
    </>
  )
}
