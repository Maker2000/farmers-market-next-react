import React from "react"

export const AddressBlock = ({ address }: { address: Address }) => {
  return (
    <div className="flex flex-col">
      <div>{address.address1}</div>
      <div className={`${address.address2 ? "" : "hidden"}`}>{address.address2}</div>
      <div>{address.city}</div>
      <div>
        {address.state} {address.zip}, {address.country}
      </div>
    </div>
  )
}
