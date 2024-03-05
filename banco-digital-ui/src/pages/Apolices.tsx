import { useEffect, useState } from "react"
import { axiosInstance } from "../api/axios";
import { Table } from "../components/TableComponents/Table";

interface PolicyProps{
  id: number,
  numero: string,
  dataContratacao: string,
  valor: number,
  descricaoAcionamento: string
}

export const Apolices = () => {
  const [policies, setPolicies] = useState<PolicyProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getPolicies = (): void => {
    setLoading(true);
    axiosInstance
      .get("/api/v1/apolices")
      .then((res) => {
        setPolicies(res.data.$values);
        setLoading(false);
      })
      .catch((error) => {
        console.log(`Erro ao buscar apólices: ${error}`)
      })
  };

  useEffect(() => {
    getPolicies();
  }, []);

  const tableHeaders = ['ID', 'Número da Apólice', 'Data de Contratação', 'Descrição de Acionamento'];
  const tableData = policies.map(policy => ({
    "id": policy.id,
    "numero": policy.numero,
    "dataContratacao": policy.dataContratacao,
    "descricaoAcionamento": policy.descricaoAcionamento
  }));

  const editPolicy = (id: number): void => {
    console.log(`editar apólice ${id}`)
  };

  const deletePolicy = (id: number): void => {
    axiosInstance
      .delete(`/api/v1/apolices/${id}`)
      .then(() => {
        setPolicies(policies.filter(policy => policy.id !== id));
      })
      .catch((error) => {
        console.log(`Erro ao deletar apólice: ${error}`);
      });
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Cartões</h2>
        <Table
          tableHeaders={tableHeaders}
          tableData={tableData}
          variavelId="id"
          editT={editPolicy}
          deleteT={deletePolicy}
          loading={loading}
        />
      </div>
    </div>
  );
};