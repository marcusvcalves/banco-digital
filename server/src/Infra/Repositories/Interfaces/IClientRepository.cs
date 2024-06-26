﻿using Domain.Models.Entities;

namespace Infra.Repositories.Interfaces;

public interface IClientRepository
{
    Task<List<Client>> GetAllAsync();
    Task<Client?> GetByIdAsync(int id);
    Task<Client> CreateAsync(Client newClient);
    Task UpdateAsync(Client client);
    Task DeleteAsync(Client client);
}