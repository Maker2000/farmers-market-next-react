"use client"
import React, { useState } from "react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import { ColDef } from "ag-grid-community"
import "ag-grid-community/styles/ag-theme-quartz.css"
import { Product, Products } from "../models/product"
interface ProductRow {
  name: string
  description: string
  pricePerUnit: number
}

const ProductTable = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState(Products)
  const rowProps: ProductRow = {
    name: "",
    description: "",
    pricePerUnit: 0,
  }
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<Product>[]>([
    ...(Object.getOwnPropertyNames(rowProps).map((x) => {
      return { field: x }
    }) as ColDef[]),
    { field: "Edit" },
  ])
  const defaultColDef: ColDef = {
    suppressAutoSize: false,
  }
  return (
    <div
      className="h-[45vh]" // applying the Data Grid theme
      // style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} />
    </div>
  )
}

export default ProductTable
