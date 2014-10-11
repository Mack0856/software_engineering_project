class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.integer :total_cost
      t.date :date_payable
      t.boolean :status

      t.timestamps
    end
  end
end
