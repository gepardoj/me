import React from 'react'

const type1 = {
  bantique: "h-[30px] bg-accent-01 relative my-2",
  first: "h-[30px] w-[100px] bg-accent-01 absolute right-[30px] -rotate-45",
  second: "h-[30px] w-[100px] bg-accent-01 absolute right-[80px] -rotate-45",
}
const type2 = {
  bantique: "h-[30px] bg-accent-02 relative my-2",
  first: "h-[30px] w-[100px] bg-accent-02 absolute left-[30px] -rotate-45",
  second: "h-[30px] w-[100px] bg-accent-02 absolute left-[80px] -rotate-45",
}

const Bantique = (props: { type: "1" | "2" }) => {
  const styles = props.type === "1" ? type1 : type2
  return (
    <div className={styles.bantique}>
      <div className={styles.first}></div>
      <div className={styles.second}></div>
    </div>
  )
}

export default Bantique
