import { defineStore } from 'pinia'

const filler = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure repellat, rem et provident sapiente molestias tempore fugit reprehenderit exercitationem excepturi dolorem corporis sed perspiciatis laudantium qui! Ipsa, sequi ex.'

export const useJobsStore = defineStore(
  'jobs', () => {
    const jobs = [
      {
        id: '1',
        title: 'testing engineer',
        description: filler,
      },
      {
        id: '2',
        title: 'UX designer',
        description: filler,
      },
      {
        id: '3',
        title: 'CEO',
        description: filler,
      }
    ]

    return { jobs }
  }
)