import EditIcon from "/edit.svg";
import DeleteIcon from "/delete.svg";
import { createColumnHelper } from "@tanstack/react-table";
const columnHelper = createColumnHelper();

function createHeader(headers) {
    const headerItems = [];
    headers.map((headerItem) => {
        const { accessor, cell, header } = headerItem;
        headerItems.push({
            header,
            accessor,
            cell,
        });
    });
    return headerItems;
}

function createActionButtons(margin) {
    return {
        accessor: "edit",
        header: "  ",
        cell: (props) => <div className="flex items-center justify-end">
            <button data-id={props.row.original.id} data-row={JSON.stringify(props.row.original)} id="edit" className={`inline-block p-[6px] bg-[#01384D10] mr-3 ml-[${margin}] rounded`}>
                <img className="pointer-events-none" src={EditIcon} alt="edit" aria-hidden="true" />
            </button>
            <button data-id={props.row.original.id} data-row={JSON.stringify(props.row.original)} id="delete" className="p-[6px] bg-[#D61F1F10] rounded">
                <img className="pointer-events-none" src={DeleteIcon} alt="delete" aria-hidden="true" />
            </button>
        </div>
    }
};

export const NewsHeaders = createHeader([
    {
        accessor: "id",
        header: "ID",
        cell: (props) => props.row.original.id,
    },
    {
        accessor: "titleUz",
        header: "Sarlavha",
        cell: (props) => props.row.original.titleUz,
    },
    {
        accessor: "Body",
        header: "Matn",
        cell: (props) => props.row.original.bodyUz,
    },
    {
        accessor: "sourceUz",
        header: "Manba",
        cell: (props) => props.row.original.sourceUz,
    },
    createActionButtons("0px")
]);
export const PartnerHeaders = createHeader([
    {
        accessor: "id",
        header: "ID",
        cell: (props) => props.row.original.id,
    },
    {
        accessor: "titleUz",
        header: "Sarlavha",
        cell: (props) => props.row.original.titleUz,
    },
    {
        accessor: "url",
        header: "URL",
        cell: (props) => props.row.original.url,
    },
    createActionButtons("0px")
]);
export const CourseHeaders = createHeader([
    {
        accessor: "id",
        header: "ID",
        cell: (props) => props.row.original.id,
    },
    {
        accessor: "titleUz",
        header: "Sarlavha",
        cell: (props) => props.row.original.titleUz,
    },
    {
        accessor: "body",
        header: "Matn",
        cell: (props) => props.row.original.bodyUz,
    },
    {
        accessor: "number",
        header: "Raqam",
        cell: (props) => props.row.original.number,
    },
    createActionButtons("0px")
]);