import DataRow from "@/components/data-row";
import Footer from "@/components/footer/footer";
import Sub_header from "@/components/sub-header/sub_header";

const historico = () => {
    return(
        <>
        
        <Sub_header/>
        <main>
            <table>
                <DataRow/>
                <DataRow/>
                <DataRow/>
                <DataRow/>
                <DataRow/>
                <DataRow/>
            </table>
        </main>
        <Footer></Footer>

        </>
    )
}

export default historico;