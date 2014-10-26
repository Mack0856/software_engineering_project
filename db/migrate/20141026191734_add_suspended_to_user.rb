class AddSuspendedToUser < ActiveRecord::Migration
  def change
    add_column :users, :suspended, :boolean
    add_column :users, :suspended_on, :date
  end
end
