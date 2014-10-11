json.array!(@transactions) do |transaction|
  json.extract! transaction, :id, :sk_song, :date, :cost
  json.url transaction_url(transaction, format: :json)
end
