"use client";
import Image from 'next/image';
import { useState } from "react";


export function Person(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li className="py-4 px-6" onClick={() => { setOpen(!open); }}>
        <div className="flex items-center content-between cursor-pointer">
          <Image
            className="w-12 h-12 rounded-full object-cover mr-4"
            src={props.person.picture.large}
            alt="Picture of {props.person.name.first} {props.person.name.last}"
            width={180}
            height={37}
            priority />
          <div className="flex-1">
            <span className="text-lg font-medium text-gray-800 dark:text-white">{props.person.name.first} {props.person.name.last}</span>
            <span className="block text-gray-600 text-base">Name</span>
          </div>
          <div className="flex-1">
            <span className="text-lg font-medium text-gray-800 dark:text-white">{props.person.dob.age} years</span>
            <span className="block text-gray-600 text-base">Age</span>
          </div>
          <div className="flex-1">
            <span className="text-lg font-medium text-gray-800 dark:text-white">{props.person.location.city}</span>
            <span className="block text-gray-600 text-base">City</span>
          </div>
        </div>

        <div className={open ? 'block' : 'hidden'}>
          <div className="p-3">
            <p className="mb-3">Extended Demographic Information</p>
            <dl>
              <dt>Address:</dt>
              <dd>{props.person.location.street.number} {props.person.location.street.name}, {props.person.location.city}, {props.person.location.state}, {props.person.location.country} </dd>

              <dt className="mt-2">Birthday:</dt>
              <dd>{props.person.dob.date.slice(0, 10)}</dd>

              <dt className="mt-2">Phone Number:</dt>
              <dd>{props.person.phone}</dd>

              <dt className="mt-2">Email:</dt>
              <dd>{props.person.email}</dd>
            </dl>
          </div>
        </div>
      </li>
    </>
  );
}