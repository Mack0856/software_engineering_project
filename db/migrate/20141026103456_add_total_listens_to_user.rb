class AddTotalListensToUser < ActiveRecord::Migration
  def change
    add_column :users, :total_listens, :integer
  end
end
