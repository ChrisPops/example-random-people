import { Person } from '@/components/Person';

export function PeopleList(props) {
  const people = props.people;
  const listItems = people.map((person, index) => {
    return <Person key={index} person={person} />;
  });

  return (
    <><ul className="w-full divide-y divide-gray-200">{listItems}</ul></>
  );
}
