import DataRow from "@/components/data-row/dataRow";
import Footer from "@/components/footer/footer";
import Sub_header from "@/components/sub-header/sub_header";
import styles from "./historico.module.css";
import Toast from "@/components/toast/toast";
import { useState, useEffect } from "react";
import { listarLogs } from "@/pages/api/logService";
import { useParams } from "next/navigation";
import { verificarAutenticacao } from "@/utils/autenticacao";
import { useRouter } from "next/router";
type historicoAlteracao = {
  logId: number;
  dataAlteracao: string;
  nomeAnterior: string;
  precoAnterior: number;
};


const Historico = () => {

  const router = useRouter()
  const ids = router.query.id
  let telaEditar = ids ? true : false
  const [historico, setHistorico] = useState<historicoAlteracao[] | null>(null);
  const [estaAutenticado, setEstaAutenticado] = useState(false)
  const params = useParams();
  const id = params?.id;

  async function listarHistorico() {
    try {
      const lista = await listarLogs(Number(id));
      setHistorico(lista);
    } catch (error: any) {
      error(error.message);
    }
  }

  useEffect(() => {
    if(!verificarAutenticacao())
        router.push("/home")
      else
        setEstaAutenticado(true)
      
    if (!ids) return;

    setTimeout(() => {
      listarLogs(Number(id));
    }, 2000);
    listarLogs(Number(id));
    listarHistorico() //*
  }, [id]);

  if(!estaAutenticado)
      return null;

  return (
    <>
      <Toast/>
      <Sub_header />
      <main className={styles.main_historico}>
      {/* <main className={`${styles.main_historico} layout_guide`}> */}
        <section className={styles.container_historico}>
        <h1 className={styles.titulo_historico}>Histórico de alterações</h1>
        {historico === null ? (
          <p className={styles.mensagem}>Carregando histórico...</p>
        ) : historico.length === 0 ? (
          <p className={styles.mensagem}>
            O produto não contém histórico de alterações
          </p>
        ) : (
          <table className={styles.tabela_historico}>
            <thead className={styles.tabela_cabeca}>
              <tr>
                <th>Data da alteração</th>
                <th>Nome anteriror</th>
                <th>Preço anterior</th>
              </tr>
            </thead>
            <tbody>
              {historico.map((item) => (
                <DataRow
                  key={item.logId}
                  dataAlteracao={item.dataAlteracao}
                  nomeAnterior={item.nomeAnterior}
                  precoAnterior={item.precoAnterior}
                />
              ))}
            </tbody>
          </table>
        )}
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Historico;

 