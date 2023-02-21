import { axiosAdminClient, axiosUserClient, queryClient } from "../../../../../main";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { useCallback, useEffect, useLayoutEffect, useMemo } from "react";
import { QueryClient } from "@tanstack/react-query";
import Loader from "../../../../../components/Loader";
import { StyledTable, StyledTableBody, StyledTableData, StyledTableHead, StyledTableHeader, StyledTableRow, StyledTableUnstyledRow } from "./admin-table.styles";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { partnerApi } from "../../../../../api";
export default function AdminTable({ tableFor, tableHeaders, page, hooks }) {
    const tableRoute = tableFor;
    const { data, isLoading } = useQuery({
        queryKey: [tableFor],
        queryFn: async () => {
            if (tableFor === "files") return await (await axiosAdminClient.get(`${tableRoute}?page=0&size=100`)).data?.content;
            if (tableFor === "partners") return await (await partnerApi.getAll()).data;
            return await (await axiosUserClient.get(`${tableRoute}?page=0&size=100`)).data?.content;
        },
        staleTime: 50000
    });

    const navigate = useNavigate();

    async function handleTableClick(e) {
        const currentTarget = e.target;
        if (currentTarget.matches("button")) {
            const buttonDataId = currentTarget.dataset.id;
            const buttonRow = JSON.parse(currentTarget.dataset.row);
            const buttonId = currentTarget.id;
            if (buttonId === "edit") return navigate(`/edit/${tableFor}/${buttonDataId}`, {
                state: buttonRow
            });
            try {
                const deleteRoute = tableFor.slice(0, -1);
                // partners -> partner, files -> file, news
                const deletedItemResponse = await axiosAdminClient.delete(`${deleteRoute}/delete/${buttonDataId}`);
                toast.success("Muvaffaqqiyatli o'chirildi!");
                queryClient.invalidateQueries({
                    queryKey: [tableFor],
                    exact: true
                })
            } catch (error) {
                toast.error("Xatolik yuz berdi");
            }
        }
    }
    
    const columns = tableHeaders;
    const tableInstance = useReactTable({
        columns,
        data: data?.[tableFor] || data?.data || data?.content || data || [],
        getCoreRowModel: getCoreRowModel(),

    });



    const { getHeaderGroups, getAllColumns } = tableInstance;
    return (
        isLoading ? <Loader /> : <>
            <StyledTable>
                <StyledTableHeader>
                    {getHeaderGroups().map(headerGroup => (
                        <StyledTableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <StyledTableHead key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </StyledTableHead>
                            ))}
                        </StyledTableRow>
                    ))}
                </StyledTableHeader>
                <StyledTableBody onClick={handleTableClick}>
                    {tableInstance.getRowModel().rows.map(row => (
                        <StyledTableUnstyledRow key={row.id}>
                            {row.getVisibleCells().map(cell => {
                                return <StyledTableData key={cell.id} >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}

                                </StyledTableData>
                            })}
                        </StyledTableUnstyledRow>
                    ))}

                </StyledTableBody>
            </StyledTable>
            <ToastContainer />
        </>
    )
}
