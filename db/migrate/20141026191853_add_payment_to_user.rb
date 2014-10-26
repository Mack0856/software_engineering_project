class AddPaymentToUser < ActiveRecord::Migration
  def change
    add_column :users, :next_payment_on, :date
    add_column :users, :paid, :boolean
  end
end
