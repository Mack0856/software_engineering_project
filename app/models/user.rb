class User < ActiveRecord::Base
	validates :first_name, presence: true
	validates :last_name, presence: true
	validates :email, presence: true
	validates :password, presence: true
	validates :address_line_1, presence: true
	validates :postcode, presence: true
	validates :gender, presence: true
	validates :date_of_birth, presence: true

end
