import * as React from 'react';

const UsingSSR = ({ serverData }) => {
  return (
    <img
      style={{ width: "320px", borderRadius: "var(--border-radius)" }}
      alt="A random dog"
      src={serverData.message}
    />
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
