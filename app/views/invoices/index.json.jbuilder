json.array!(@invoices) do |invoice|
  json.extract! invoice, :id, :total_cost, :date_payable, :status
  json.url invoice_url(invoice, format: :json)
end
