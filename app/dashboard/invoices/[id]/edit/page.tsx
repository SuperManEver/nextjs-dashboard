// ui
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

// lib
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';

interface IProps {
  params: { id: string };
}

async function Page({ params }: IProps) {
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      {invoice && <Form invoice={invoice} customers={customers} />}
    </main>
  );
}

export default Page;
