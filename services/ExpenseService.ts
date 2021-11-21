import crypto from "crypto";
import config from "../knexfile";
import { knex as knexDriver } from "knex";

const knex = knexDriver(config);

type Expense = {
  date: Date;
  name: string;
  value: number;
};

type SavedExpense = Expense & {
  id: string;
};

class ExpenseService {
  expenses: SavedExpense[] = [];

  async add(expense: Expense): Promise<SavedExpense> {
    const newExpense = {
      ...expense,
      id: crypto.randomUUID(),
    };
    await knex("expenses").insert(newExpense);
    return newExpense;
  }

  async delete(uuid: string): Promise<void> {
    await knex("expeses").where({ id: uuid }).delete();
  }

  async getAll(): Promise<Expense[]> {
    return knex("expenses");
  }

  async getTotal(): Promise<number> {
    const response = await knex<SavedExpense>("expenses").sum("value").first();
    return response?.sum || 0;
  }
}

export default ExpenseService;
