﻿using Domain.Models.Entities;

namespace Infra.Repositories.ClienteRepo;

public interface IClienteRepository
{
    Task<List<Cliente>> GetAllAsync();
    Task<Cliente?> GetByIdAsync(int id);
    Task<Cliente> CreateAsync(Cliente novoCliente);
    Task UpdateAsync(int id, Cliente cliente);
    Task DeleteAsync(int id);
}