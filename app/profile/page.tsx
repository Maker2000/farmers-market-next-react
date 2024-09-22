import React from "react"
import { User1 } from "../models/user"
import ProductTable from "../components/ProductTable"
import { AddressBlock } from "../components/AddressBlock"

function Profile() {
  let user = User1
  return (
    <div className="flex flex-col gap-2 mt-2">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row gap-2">
        <div className="panel flex flex-col ml-2 p-6 rounded-2xl flex-[2]">
          <h1 className="text-2xl font-semibold">
            {user.firstName} {user.lastName}
          </h1>
          <div className="text-primary-hover">{user.occupation}</div>
          <div className="text-primary-hover pt-5 text-lg font-bold">Address</div>
          <AddressBlock address={user.address} />
          <div className="flex justify-between py-4">
            <div>
              <span className="text-sm">Joined:</span> <span className="text-primary-hover font-extrabold">{user.createdAt.toDateString()}</span>
            </div>
            <div>
              <span className="text-sm">Profile Updated:</span> <span className="text-primary-hover font-extrabold">{user.lastUpdated.toDateString()}</span>
            </div>
          </div>
        </div>
        <div className="panel flex flex-col mr-2 p-6 rounded-2xl flex-1">
          <h1 className="text-2xl font-semibold">Sales</h1>
          <div className="text-primary-hover">{user.occupation}</div>
        </div>
      </div>
      <div className="panel mx-2 flex-grow flex-1 rounded-2xl p-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <ProductTable />
      </div>
    </div>
  )
}

export default Profile
