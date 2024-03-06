﻿namespace Domain.Models.Entities
{
    public class Conta
    {
        public int Id { get; set; }
        public string Senha { get; set; }
        public decimal Saldo { get; set; }
        public DateTime DataCriacao { get; set; }
        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; }
        public ICollection<Cartao> Cartoes { get; } = new List<Cartao>();
    }
    

    public class ContaCorrente : Conta
    {
        public decimal TaxaMensal { get; set; }
    }

    public class ContaPoupanca : Conta
    {
        public decimal TaxaRendimento { get; set; }
    }
}