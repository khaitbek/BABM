import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import React from 'react'
import { fileApi } from "../../../../api";
import { FileHeader } from "../../../../data/table-data";
import AdminTable from "../../components/Sidebar/AdminTable/AdminTable";

export default function AdminFiles() {
    // const { data, isLoading, error } = useQuery({
    //     queryKey: ["files"],
    //     queryFn: async () => {
    //         return await fileApi.getAll();
    //     },
    //     staleTime: 50000
    // });
    return (
        <AdminTable tableFor="files" tableHeaders={FileHeader} />
    )
}
