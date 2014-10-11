json.array!(@users) do |user|
  json.extract! user, :id, :password, :email, :address_line_1, :address_line_2, :address_line_3, :postcode, :phone, :first_name, :last_name, :gender, :date_of_birth
  json.url user_url(user, format: :json)
end
