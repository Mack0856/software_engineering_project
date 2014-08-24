json.array!(@users) do |user|
  json.extract! user, :id, :first_name, :last_name, :email, :username, :password, :address_line1, :address_line2, :address_line3, :city, :state, :country, :postal_code, :contact_number
  json.url user_url(user, format: :json)
end
