import { PartnerHeaders } from "../../../../data/table-data";
import AdminTable from "../../components/Sidebar/AdminTable/AdminTable";

export default function AdminPartner() {
    return (
        <AdminTable tableFor="news" tableHeaders={PartnerHeaders} />
    )
}
